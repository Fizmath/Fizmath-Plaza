package config

import (
	"fmt"
	"time"

	"github.com/kelseyhightower/envconfig"
)

type (
	PGConfig struct {
		Conn string `required:"true"`
	}
	NatsConfig struct {
		URL    string `required:"true"`
		Stream string `default:"ORDERS"`
	}
	AppConfig struct {
		LogLevel        string `envconfig:"LOG_LEVEL" default:"DEBUG"`
		PG              PGConfig
		Nats            NatsConfig
		Rpc             RpcConfig
		Web             WebConfig
		ShutdownTimeout time.Duration `envconfig:"SHUTDOWN_TIMEOUT" default:"30s"`
	}
)

type RpcConfig struct {
	Host string `default:"0.0.0.0"`
	Port string `default:":8085"`
}

func (c RpcConfig) Address() string {
	return fmt.Sprintf("%s%s", c.Host, c.Port)
}

type WebConfig struct {
	Host string `default:"0.0.0.0"`
	Port string `default:":8080"`
}

func (c WebConfig) Address() string {
	return fmt.Sprintf("%s%s", c.Host, c.Port)
}

func InitConfig() (cfg AppConfig, err error) {

	err = envconfig.Process("", &cfg)

	if err != nil {
		panic(err)
	}
	return cfg, err
}
