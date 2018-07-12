import { createStore } from "redux";
import reducer from "../reducers";
const data =["1 пункт", "3 пункт"];

const initialState = {
	item:"",
	data:data
};

const store = createStore(reducer, initialState);
export  default  store;