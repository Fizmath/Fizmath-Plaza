package domain

import (
	"context"
	"encoding/json"
	"fizmathplaza/internal/jstream"
)

type PubPort interface {
	OrderCreatedEvent(ctx context.Context, event *Order, eventname string) error
}

var _ PubPort = (*IntegrationEventHandlers)(nil)

type IntegrationEventHandlers struct {
	publisher jstream.Stream
}

var Injector = IntegrationEventHandlers{}

func EventPublisher(publisher *jstream.Stream) *IntegrationEventHandlers {

	jetPointer := &Injector

	jetPointer.publisher = *publisher

	return &IntegrationEventHandlers{
		publisher: *publisher,
	}
}

func (a IntegrationEventHandlers) OrderCreatedEvent(ctx context.Context, event *Order, eventname string) error {

	j, err := json.Marshal(event)
	if err != nil {
		return err
	}
	return a.publisher.PublishStream(ctx, j, eventname)
}
