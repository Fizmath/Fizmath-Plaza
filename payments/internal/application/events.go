package application

import (
	// "context"
	"context"
	"encoding/json"
	"fizmathplaza/internal/jstream"
)

type PubPort interface {
	PubPayment(ctx context.Context, event *Order, eventname string) error
	PubInvoice(ctx context.Context, event *Order, eventname string) error
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

	thaPointer := &Injector

	thaPointer.publisher = *publisher

	return &IntegrationEventHandlers{
		publisher: *publisher,
	}
}

func (a IntegrationEventHandlers) PubPayment(ctx context.Context, event *Order, eventname string) error {
	j, err := json.Marshal(event)
	if err != nil {
		return err
	}
	return a.publisher.PublishStream(ctx, j, eventname)

}

func (a IntegrationEventHandlers) PubInvoice(ctx context.Context, event *Order, eventname string) error {
	j, err := json.Marshal(event)
	if err != nil {
		return err
	}
	return a.publisher.PublishStream(ctx, j, eventname)

}
