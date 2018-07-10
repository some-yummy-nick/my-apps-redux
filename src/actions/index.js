import store from '../store/';

function setTechnology (text) {
	return {
		type: 'SET_TECHNOLOGY',
		tech: text
	}
}

export default  function dispatchBtnAction(e) {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
}
