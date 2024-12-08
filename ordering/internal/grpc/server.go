package grpc

import (
	"context"

	"github.com/google/uuid"
	"google.golang.org/grpc"

	"fizmathplaza/ordering/internal/application"
	"fizmathplaza/ordering/internal/application/commands"
	"fizmathplaza/ordering/internal/application/queries"
	"fizmathplaza/ordering/internal/domain"
	"fizmathplaza/ordering/orderingpb"
)

type server struct {
	app application.App
	orderingpb.UnimplementedOrderingServiceServer
}

var _ orderingpb.OrderingServiceServer = (*server)(nil)

func RegisterServer(app application.App, registrar grpc.ServiceRegistrar) error {
	orderingpb.RegisterOrderingServiceServer(registrar, server{app: app})
	return nil
}

func (s server) RemoveIds(ctx context.Context, request *orderingpb.RemoveIdsRequest) (*orderingpb.RemoveIdsResponse, error) {

	items := make([]*commands.Idss, 0, len(request.Ids))
	for _, item := range request.Ids {
		items = append(items, s.IdToDomain(item))
	}

	err := s.app.RemoveIDs(ctx, commands.Rids{
		Ids: items,
	})

	return &orderingpb.RemoveIdsResponse{}, err
}

func (s server) IdToDomain(item *orderingpb.Ids) *commands.Idss {
	return &commands.Idss{
		OrderID: item.GetOrderid(),
	}
}

func (s server) CreateOrder(ctx context.Context, request *orderingpb.CreateOrderRequest) (*orderingpb.CreateOrderResponse, error) {
	id := uuid.New().String()

	items := make([]*domain.Item, 0, len(request.Items))
	for _, item := range request.Items {
		items = append(items, s.itemToDomain(item))
	}

	err := s.app.CreateOrder(ctx, commands.CreateOrder{
		OrderID:    id,
		CustomerID: request.GetCustomerId(),
		PaymentID:  request.GetPaymentId(),
		Items:      items,
	})

	return &orderingpb.CreateOrderResponse{Orderid: id}, err
}

func (s server) CancelOrder(ctx context.Context, request *orderingpb.CancelOrderRequest) (*orderingpb.CancelOrderResponse, error) {
	err := s.app.CancelOrder(ctx, commands.CancelOrder{OrderID: request.GetOrderid()})

	return &orderingpb.CancelOrderResponse{}, err
}

func (s server) GetOrder(ctx context.Context, request *orderingpb.GetOrderRequest) (*orderingpb.GetOrderResponse, error) {
	order, err := s.app.GetOrder(ctx, queries.GetOrder{OrderID: request.GetOrderid()})
	if err != nil {
		return nil, err
	}

	return &orderingpb.GetOrderResponse{
		Order: s.orderFromDomain(order),
	}, nil
}

func (s server) GetAll(ctx context.Context, request *orderingpb.GetAllRequest) (*orderingpb.GetAllResponse, error) {
	products, err := s.app.GetAll(ctx, queries.EventSourcing{Events: request.EventSourcing})
	if err != nil {
		return nil, err
	}

	protoProducts := make([]*orderingpb.Order, len(products))
	for i, product := range products {
		protoProducts[i] = s.orderFromDomain(product)
	}

	return &orderingpb.GetAllResponse{
		Orders: protoProducts,
	}, nil
}

func (s server) orderFromDomain(order *domain.Order) *orderingpb.Order {
	items := make([]*orderingpb.Item, 0, len(order.Items))
	for _, item := range order.Items {
		items = append(items, s.itemFromDomain(item))
	}

	return &orderingpb.Order{
		Orderid:    order.OrderID,
		CustomerId: order.CustomerID,
		PaymentId:  order.PaymentID,
		Items:      items,
		Status:     order.Status.String(),
		StatusP:    order.StatusP.String(),
		StatusS:    order.StatusS.String(),
		CreatedAt:  order.CreatedAt,
	}
}

func (s server) itemToDomain(item *orderingpb.Item) *domain.Item {
	return &domain.Item{
		ProductID:   item.GetProductId(),
		StoreID:     item.GetStoreId(),
		StoreName:   item.GetStoreName(),
		ProductName: item.GetProductName(),
		Price:       item.GetPrice(),
		Quantity:    int(item.GetQuantity()),
	}
}

func (s server) itemFromDomain(item *domain.Item) *orderingpb.Item {
	return &orderingpb.Item{
		StoreId:     item.StoreID,
		ProductId:   item.ProductID,
		StoreName:   item.StoreName,
		ProductName: item.ProductName,
		Price:       item.Price,
		Quantity:    int32(item.Quantity),
	}
}
