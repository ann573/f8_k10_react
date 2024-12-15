import { legacy_createStore as createStore } from "redux";
import { rootReducer } from './../reducer/index';

export const store = createStore(rootReducer)