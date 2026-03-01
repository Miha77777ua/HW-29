import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const contactsSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export const filterReducer = contactsSlice.reducer;
