package commands

import (
	"context"
	"fizmathplaza/stores/internal/domain"
)

type RebrandStore struct {
	ID       string
	Name     string
	Location string
}

type RebrandStoreHandler struct {
	stores domain.StoreRepository
}

func InjectRebrandStoreHandler(stores domain.StoreRepository) RebrandStoreHandler {
	return RebrandStoreHandler{
		stores: stores,
	}
}

func (h RebrandStoreHandler) RebrandStore(ctx context.Context, cmd RebrandStore) error {

	store, err := h.stores.Find(ctx, cmd.ID)
	if err != nil {
		return err
	}

	if err = store.Rebrand(cmd.Name, cmd.Location); err != nil {
		return err
	}

	if err = h.stores.Update(ctx, store); err != nil {
		return err
	}

	return nil
}
