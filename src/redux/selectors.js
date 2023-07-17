import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filters;

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        if (filter === '') {
            return contacts;
        } else {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.filter),
            );
        }
    },
);
