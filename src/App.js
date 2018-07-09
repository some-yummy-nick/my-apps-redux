import React, {Component} from 'react';
import Hello from "./components/Hello";
import reducer from "./reducers";
import { createStore } from "redux";
const initialState = { tech: "React " };
const store = createStore(reducer,initialState);

class App extends Component {
	state = store.getState();

	render() {
		return (
			<h1>
				<Hello tech={this.state.tech}/>
			</h1>
		);
	}
}

export default App;