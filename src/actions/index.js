import{ADD_ITEM} from "../constants/action-types";
import{ADD_TASK} from "../constants/action-types";

import store from '../store/';

const addItem = value => ({
	type: ADD_ITEM,
	item: value
});

export const dispatchInputAction = (e)=> {
	e.preventDefault();
	store.dispatch(addItem(store.getState().item));
};

const addTask = value => ({
	type: ADD_TASK,
	data: value
});

export const  dispatchSubmitAction =(e)=> {
	e.preventDefault();
	const item =e.currentTarget.querySelector("input");
	store.dispatch(addTask(item.value));
	item.value="";
};
