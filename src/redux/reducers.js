import { addContact, deleteContact, changeFilter, updateContacts } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

export const rootReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      const newContacts = [...state.contacts, action.payload];

      localStorage.setItem("contacts", JSON.stringify(newContacts));

      return { ...state, contacts: newContacts, };
    })
    .addCase(deleteContact, (state, action) => {
      const redactedContacts = state.contacts.filter(el => el.name !== action.payload);

      localStorage.setItem("contacts", JSON.stringify(redactedContacts));

      return { ...state, contacts: redactedContacts, };
    })
    .addCase(changeFilter, (state, action) => {
      return { ...state, filter: action.payload, };
    })
    .addCase(updateContacts, (state, action) => {
      const localStorageContacts = JSON.parse(localStorage.getItem(action.payload)) || [];

      return { ...state, contacts: localStorageContacts, }
    });
});
