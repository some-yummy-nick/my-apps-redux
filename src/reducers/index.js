export default (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				item: action.item
			};
		default:
			return state;
	}
}