import React, {Component} from 'react';
import store from '../store/';

import {dispatchInputAction, dispatchInitAction, dispatchSubmitAction} from "../actions";

class App extends Component {
	componentDidMount() {
		function da() {
			dispatchInitAction(store.getState().data)
		}

		setTimeout(da, 100);
	}
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
