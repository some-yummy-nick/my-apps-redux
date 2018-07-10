import React, {Component} from 'react';
import '../style.css';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import  _ from "lodash";
import store from "../store";

class App extends Component {

	render() {
		const { contacts } = store.getState().contacts;
		const {  user, activeUserId  } = store.getState();

		return (
			<div className="App">
				<Sidebar contacts={_.values(contacts)}/>
				<Main user={user} activeUserId={activeUserId}/>
			</div>
		);
	}
}

export default App;
