import{ADD_ITEM, ADD_TASK, ADD_INIT, DEFAULT_VALUE} from "../constants/action-types";

import store from '../store/';

const addItem = value => ({
	type: ADD_ITEM,
	item: value
});

export const dispatchInputAction = (e)=> {
	e.preventDefault();
	store.dispatch(addItem(e.currentTarget.value));
};

const addTask = value => ({
	type: ADD_TASK,
	data: value
});

const addInit = value => ({
	type: ADD_INIT,
	data: value
});

export const dispatchInitAction=()=>{
	store.dispatch(addInit(store.getState().data));
};

export const  dispatchSubmitAction =(e)=> {
	e.preventDefault();
	store.dispatch(addTask(store.getState().item));
	store.dispatch({
		type:DEFAULT_VALUE,
		item:""
	});
	console.log(store.getState());
};
