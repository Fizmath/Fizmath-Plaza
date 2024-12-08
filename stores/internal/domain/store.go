package domain

import (
	"errors"
)

var (
	ErrStoreNameIsBlank               = errors.New("the store name cannot be blank")
	ErrStoreLocationIsBlank           = errors.New("the store location cannot be blank")
	ErrStoreIsAlreadyParticipating    = errors.New("the store is already participating")
	ErrStoreIsAlreadyNotParticipating = errors.New("the store is already not participating")
)

type Store struct {
	ID            string
	Name          string
	Location      string
	Participating bool
}

func (s *Store) Rebrand(name, location string) error {
	if name == "" {
		return ErrStoreNameIsBlank
	}

	if location == "" {
		return ErrStoreLocationIsBlank
	}

	s.Location = location
	s.Name = name

	return nil
}

func CreateStore(id, name, location string) (store *Store, err error) {
	if name == "" {
		return nil, ErrStoreNameIsBlank
	}

	if location == "" {
		return nil, ErrStoreLocationIsBlank
	}

	store = &Store{
		ID:       id,
		Name:     name,
		Location: location,
	}

	return
}

func (s *Store) EnableParticipation() (err error) {
	if s.Participating {
		return ErrStoreIsAlreadyParticipating
	}

	s.Participating = true

	return
}

func (s *Store) DisableParticipation() (err error) {
	if !s.Participating {
		return ErrStoreIsAlreadyNotParticipating
	}

	s.Participating = false

	return
}
