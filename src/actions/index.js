import {ADD_ITEM, ADD_TASK, ADD_INIT, DEFAULT_VALUE, ADD_ANOTHER} from "../constants/action-types";

import store from '../store/';

const addItem = value => ({
	type: ADD_ITEM,
	item: value
});

export const dispatchInputAction = (e) => {
	e.preventDefault();
	store.dispatch(addItem(e.currentTarget.value));
};

const addTask = value => ({
	type: ADD_TASK,
	data: value
});

const addInit = value => ({
	type: ADD_INIT,
	newData: value
});

const addAnother = value => ({
	type: ADD_ANOTHER,
	data: value
});

export const dispatchLinkAction = (e) => {
	e.preventDefault();
	var arr = [];

	for (var i = 30; i < 60; i++) {
		arr.push(store.getState().data[i]);
	}
	store.dispatch(addAnother(arr));

};

export const dispatchInitAction = (e) => {
	var arr = [];

	if (e) {
		var multiple= e.currentTarget.innerHTML;
		for (var i = (multiple-1)*30; i < multiple*30; i++) {
			arr.push(store.getState().data[i]);
		}
	}
	else{
		for (var i = 0; i < 30; i++) {
			arr.push(store.getState().data[i]);
		}
	}

	store.dispatch(addInit(arr));
};

export const dispatchSubmitAction = (e) => {
	e.preventDefault();
	store.dispatch(addTask(store.getState().item));
	store.dispatch({
		type: DEFAULT_VALUE,
		item: ""
	});
};
