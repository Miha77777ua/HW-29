import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.name !== action.payload);

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    updateContacts: (state, action) => {
      state.contacts = JSON.parse(localStorage.getItem(action.payload)) || [];
    },
  },
});

export const { addContact, deleteContact, updateContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
