import{ADD_TASK} from "../constants/action-types";
import store from '../store/';

 const addTask = value => ({
	type: ADD_TASK,
	item: value
});

export default  function dispatchSubmitAction(e) {
	e.preventDefault();
	const item =e.currentTarget.querySelector("input");
	store.dispatch(addTask(item.value));
	item.value="";
}