const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSave = JSON.parse(localStorage.getItem('contact')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsSave,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactNames = state.map(contact => contact.name);
        if (contactNames.includes(action.payload.name))
          return alert(`${action.payload.name} is alredy in contacts`);

        state.push(action.payload);
        localStorage.setItem('contact', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('contact', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
