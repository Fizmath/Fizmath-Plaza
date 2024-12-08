package jstream

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/nats-io/nats.go/jetstream"
)

type Stream struct {
	streamName string
	js         jetstream.JetStream
	jstream    jetstream.Stream
}

func NewStream(streamName string, js jetstream.JetStream, jstream jetstream.Stream) *Stream {
	return &Stream{
		streamName: streamName,
		js:         js,
		jstream:    jstream,
	}
}

func (s *Stream) PublishStream(ctx context.Context, data []byte, topicName string) (err error) {

	_, err = s.js.Publish(ctx, "ORDERS."+topicName, data)
	if err != nil {
		return err
	}
	PrintStreamState(ctx, s.jstream)

	return nil
}

func PrintStreamState(ctx context.Context, stream jetstream.Stream) {
	info, _ := stream.Info(ctx)
	b, _ := json.MarshalIndent(info.State, "", " ")
	fmt.Println(string(b))
}
