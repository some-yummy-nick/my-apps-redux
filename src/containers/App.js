import React, {Component} from 'react';
import store from '../store/';

import {dispatchInputAction, dispatchSubmitAction} from "../actions";

class App extends Component {
	render() {
		return (
			<div className="Todo">
				<ul>
					{store.getState().data.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
				<form action="" onSubmit={dispatchSubmitAction}>
					<input type="text" onChange={dispatchInputAction}/>
				</form>

				<div>{store.getState().item}</div>
			</div>
		);
	}
}

export default App;
