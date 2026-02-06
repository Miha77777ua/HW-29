import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
