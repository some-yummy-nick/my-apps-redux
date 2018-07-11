import { createStore } from "redux";
import reducer from "../reducers";
const initialState = {
	item:""
};
const store = createStore(reducer, initialState);
export  default  store;