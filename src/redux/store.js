import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
  reducer: {
    filter: persistedReducer,
    contacts: contactsReducer,
  },
});

export const persistor = persistStore(store);
