package commands

import (
	// "context"
	"context"
	"fizmathplaza/stores/internal/application/queries"
	"fizmathplaza/stores/internal/domain"
	"fmt"
	"time"
)

type ConfirmStoresHandler struct {
	products domain.ProductRepository
}

func InjectConfirmStoresHandler(products domain.ProductRepository) ConfirmStoresHandler {
	return ConfirmStoresHandler{products: products}
}

func (h ConfirmStoresHandler) ConfirmStores(ctx context.Context, dat queries.ConP) error {
	time.Sleep(15 * time.Second)
	message := &domain.Order{OrderID: fmt.Sprint(dat["OrderID"]), From: "Stores", Message: "Stores_CONFIRMED"}

	strs := dat["Items"].([]interface{})
	for i := range strs {
		prodid := strs[i].(map[string]interface{})["ProductID"].(string)
		quantity := strs[i].(map[string]interface{})["Quantity"].(float64)
		st, _ := h.products.Find(ctx, prodid)
		if int32(quantity) > int32(st.SKU) {
			message.Message = "OUT_OF_STOCK"
		}
	}

	domain.Injector.PubStores(ctx, message, "processed")
	return nil
}
