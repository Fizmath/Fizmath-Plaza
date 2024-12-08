package grpc

import (
	"context"

	"github.com/google/uuid"
	"google.golang.org/grpc"

	"fizmathplaza/customers/customerspb"
	"fizmathplaza/customers/internal/application"
	"fizmathplaza/customers/internal/domain"
)

type server struct {
	app application.App
	customerspb.UnimplementedCustomersServiceServer
}

var _ customerspb.CustomersServiceServer = (*server)(nil)

func RegisterServer(app application.App, registrar grpc.ServiceRegistrar) error {
	customerspb.RegisterCustomersServiceServer(registrar, server{app: app})
	return nil
}

func (s server) RegisterCustomer(ctx context.Context, request *customerspb.RegisterCustomerRequest) (*customerspb.RegisterCustomerResponse, error) {
	id := uuid.New().String()
	err := s.app.RegisterCustomer(ctx, application.RegisterCustomer{
		ID:    id,
		Name:  request.GetName(),
		Phone: request.GetPhone(),
	})
	return &customerspb.RegisterCustomerResponse{Id: id}, err
}

func (s server) GetCustomer(ctx context.Context, request *customerspb.GetCustomerRequest) (*customerspb.GetCustomerResponse, error) {
	customer, err := s.app.GetCustomer(ctx, application.GetCustomer{
		ID: request.GetId(),
	})
	if err != nil {
		return nil, err
	}

	return &customerspb.GetCustomerResponse{
		Customer: s.customerFromDomain(customer),
	}, nil
}

func (s server) customerFromDomain(customer *domain.Customer) *customerspb.Customer {
	return &customerspb.Customer{
		Id:    customer.ID,
		Name:  customer.Name,
		Phone: customer.Phone,
	}
}
