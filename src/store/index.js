import { createStore } from "redux";
import reducer from "../reducers";
var arr=[];

function reqListener() {
	var data = JSON.parse(this.responseText);

	data.map((item=>{
		return arr.push(item.title);
	}));
}


var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'https://jsonplaceholder.typicode.com/todos/', true);
oReq.send();

const initialState = {
	item:"",
	data:arr
};

const store = createStore(reducer, initialState);
export  default  store;