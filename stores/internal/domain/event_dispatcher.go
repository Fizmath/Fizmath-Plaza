package domain

import (
	// "context"
	"context"
	"encoding/json"
	"fizmathplaza/internal/jstream"
)

const (
	OrderCreatedEvent = "ordering.OrderCreated"
)

type PubPort interface {
	PubStores(ctx context.Context, event *Order, eventname string) error
}

var _ PubPort = (*IntegrationEventHandlers)(nil)

type IntegrationEventHandlers struct {
	publisher jstream.Stream
}

var Injector = IntegrationEventHandlers{}

type Order struct {
	OrderID string
	Message string
	From    string
}

func EventHandlers(publisher *jstream.Stream) *IntegrationEventHandlers {

	personPointer := &Injector

	personPointer.publisher = *publisher

	return &IntegrationEventHandlers{
		publisher: *publisher,
	}
}

func (a IntegrationEventHandlers) PubStores(ctx context.Context, event *Order, eventname string) error {

	j, err := json.Marshal(event)
	if err != nil {
		return err
	}

	return a.publisher.PublishStream(ctx, j, eventname)

}
