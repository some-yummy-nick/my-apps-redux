import{ADD_TASK} from "../constants/action-types";

export const addTask = value => ({
	type: ADD_TASK,
	payload: value
});