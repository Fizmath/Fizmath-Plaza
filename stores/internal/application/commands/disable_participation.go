package commands

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type DisableParticipation struct {
	ID string
}

type DisableParticipationHandler struct {
	stores domain.StoreRepository
}

func InjectDisableParticipationHandler(stores domain.StoreRepository) DisableParticipationHandler {
	return DisableParticipationHandler{
		stores: stores,
	}
}

func (h DisableParticipationHandler) DisableParticipation(ctx context.Context, cmd DisableParticipation) error {
	store, err := h.stores.Find(ctx, cmd.ID)
	if err != nil {
		return err
	}

	if err = store.DisableParticipation(); err != nil {
		return err
	}

	if err = h.stores.Update(ctx, store); err != nil {
		return err
	}

	return nil
}
