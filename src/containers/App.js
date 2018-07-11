import React, {Component} from 'react';
import store from '../store/';
import  dispatchSubmitAction from "../actions";

class App extends Component {
	render() {
		return (
			<div className="Todo">
				<form action="" onSubmit={dispatchSubmitAction}>
					<input type="text" ref="input"/>
				</form>

				<div>{store.getState().item}</div>
			</div>
		);
	}
}

export default App;
