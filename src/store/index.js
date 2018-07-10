import { createStore } from "redux";
import reducer from "../reducers";
const initialState = { tech: "React " };
const store = createStore(reducer, initialState);
export  default  store;