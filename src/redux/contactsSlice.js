import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});


export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsSave,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         const contactNames = state.map(contact => contact.name);
//         if (contactNames.includes(action.payload.name))
//           return alert(`${action.payload.name} is alredy in contacts`);

//         state.push(action.payload);
//         localStorage.setItem('contact', JSON.stringify(state));
//       },
//       prepare(name, number) {
//         return {
//           payload: { name, number, id: nanoid() },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//       localStorage.setItem('contact', JSON.stringify(state));
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
