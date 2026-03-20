import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, api) => {
  try {
    const response = await fetch(`https://${import.meta.env.VITE_KEY}.mockapi.io/contacts`);
    const data = await response.json();
    return data;
  } catch (e) {
    return api.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, api) => {
  try {
    const response = await fetch(`https://${import.meta.env.VITE_KEY}.mockapi.io/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();

    api.dispatch(fetchContacts());

    return { data, contact };
  } catch (e) {
    return api.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, api) => {
  try {
    const response = await fetch(`https://${import.meta.env.VITE_KEY}.mockapi.io/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return { data, id };
  } catch (e) {
    return api.rejectWithValue(e.message);
  }
});
