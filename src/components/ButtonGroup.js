import React from 'react';
import dispatchBtnAction from '../actions';

export default function ButtonGroup (props) {

	return(
		<div className="buttons">
			{props.technologies.map((item, index)=>{
				return <button data-tech={item} key={index} type="button" onClick={dispatchBtnAction}>{item}</button>
			})}
		</div>

	)

}