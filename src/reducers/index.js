export default (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				data: state.data.concat(action.data)
			};
		case "ADD_ITEM":
			return {
				...state,
				item: action.item
			};
		case "DEFAULT_VALUE":
			return {
				...state,
				item: action.item
			};
		default:
			return state;
	}
}