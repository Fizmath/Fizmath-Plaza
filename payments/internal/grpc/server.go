package grpc

import (
	"context"

	"github.com/google/uuid"
	"google.golang.org/grpc"

	"fizmathplaza/payments/internal/application"
	"fizmathplaza/payments/paymentspb"
)

type server struct {
	app application.App
	paymentspb.UnimplementedPaymentsServiceServer
}

var _ paymentspb.PaymentsServiceServer = (*server)(nil)

func RegisterServer(_ context.Context, app application.App, registrar grpc.ServiceRegistrar) error {
	paymentspb.RegisterPaymentsServiceServer(registrar, server{app: app})
	return nil
}

func (s server) AuthorizePayment(ctx context.Context, request *paymentspb.AuthorizePaymentRequest) (*paymentspb.AuthorizePaymentResponse, error) {
	id := uuid.New().String()
	err := s.app.AuthorizePayment(ctx, application.AuthorizePayment{
		ID:         id,
		CustomerID: request.GetCustomerId(),
		Amount:     request.GetAmount(),
	})
	return &paymentspb.AuthorizePaymentResponse{Id: id}, err
}

func (s server) PayInvoice(ctx context.Context, request *paymentspb.PayInvoiceRequest) (*paymentspb.PayInvoiceResponse, error) {
	err := s.app.PayInvoice(ctx, application.PayInvoice{
		OrderID: request.GetOrderid(),
	})
	return &paymentspb.PayInvoiceResponse{}, err
}
