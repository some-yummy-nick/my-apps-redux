export default (state="", action) => {
	switch (action.type) {
		case "ADD_TASK":
			return  action.payload;
		default:
			return state;
	}
}