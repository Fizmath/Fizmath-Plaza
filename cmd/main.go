package main

import (
	"context"
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"time"

	"fizmathplaza/customers"
	"fizmathplaza/internal/config"
	"fizmathplaza/internal/logger"
	"fizmathplaza/internal/monolith"
	"fizmathplaza/internal/waiter"
	"fizmathplaza/internal/web"
	"fizmathplaza/ordering"
	"fizmathplaza/payments"
	"fizmathplaza/stores"

	"github.com/go-chi/chi/v5"
	_ "github.com/lib/pq"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
)

func main() {
	if err := run(); err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
}

func run() (err error) {
	//  Uncomment for the Local Dev Mode :

	// os.Setenv("PG_CONN", "host=localhost dbname=fizmathplaza user=fizmathplaza_user password=fizmathplaza_pass  sslmode=disable ")
	// os.Setenv("NATS_URL", "http://localhost:4222")
	
	var cfg config.AppConfig

	cfg, err = config.InitConfig()
	if err != nil {
		return err
	}

	m := app{cfg: cfg}

	m.db, err = sql.Open("postgres", cfg.PG.Conn)
	if err != nil {
		return err
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			return
		}
	}(m.db)

	// init nats & jetstream
	m.nc, err = nats.Connect(cfg.Nats.URL)
	if err != nil {
		return err
	}
	defer m.nc.Drain()

	m.js, m.stream, err = initJetStream(m.nc)
	if err != nil {
		return err
	}

	m.logger = logger.New(logger.LogConfig{
		LogLevel: logger.Level(cfg.LogLevel),
	})
	m.rpc = initRpc(cfg.Rpc)
	m.mux = initMux(cfg.Web)
	m.waiter = waiter.New(waiter.CatchSignals())

	// init modules
	m.modules = []monolith.Module{
		&customers.Module{},
		&ordering.Module{},
		&payments.Module{},
		&stores.Module{},
	}

	if err = m.startupModules(); err != nil {
		return err
	}

	m.mux.Mount("/", http.FileServer(http.FS(web.WebUI)))

	fmt.Println("started plaza application")
	defer fmt.Println("stopped plaza application")

	m.waiter.Add(
		m.waitForWeb,
		m.waitForRPC,
		m.waitForStream,
	)

	return m.waiter.Wait()
}

func initJetStream(nc *nats.Conn) (jetstream.JetStream, jetstream.Stream, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	js, err := jetstream.New(nc)
	if err != nil {
		return nil, nil, err
	}

	stream, _ := js.CreateStream(ctx, jetstream.StreamConfig{
		Name:      "ORDERS",
		Retention: jetstream.InterestPolicy,
		Subjects:  []string{"ORDERS.*"},
	})

	return js, stream, err
}

func initRpc(config.RpcConfig) *grpc.Server {
	server := grpc.NewServer()
	reflection.Register(server)

	return server
}

func initMux(config.WebConfig) *chi.Mux {
	return chi.NewMux()
}
