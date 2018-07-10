import React from 'react';
import store from "../store/";
function setTechnology (text) {
	return {
		type: "SET_TECHNOLOGY",
		tech: text
	}
}

function dispatchBtnAction(e) {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
}

export default function ButtonGroup (props) {

	return(
		<div className="buttons">
			{props.technologies.map((item, index)=>{
				return <button data-tech={item} key={index} type="button" onClick={dispatchBtnAction}>{item}</button>
			})}
		</div>

	)

}