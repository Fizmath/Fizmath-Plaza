package monolith

import (
	"context"
	"database/sql"

	"github.com/go-chi/chi/v5"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/rs/zerolog"
	"google.golang.org/grpc"

	"fizmathplaza/internal/config"
	"fizmathplaza/internal/waiter"
)

type Monolith interface {
	Config() config.AppConfig
	DB() *sql.DB
	Logger() zerolog.Logger
	JS() jetstream.JetStream
	ST() jetstream.Stream

	Mux() *chi.Mux
	RPC() *grpc.Server
	Waiter() waiter.Waiter
}

type Module interface {
	Startup(context.Context, Monolith) error
}
