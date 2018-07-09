import React, {Component} from 'react';
import TaskList from "./components/TaksList";
import TaskAdd from "./components/TaksAdd";
import data from "./json/data.json";

class TaskApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		}
	}

	addItem = (item) => {
		this.setState ( {
			data: this.state.data.concat(item)
		});
	};

	render() {
		return (
			<React.Fragment>
				<TaskAdd addItem={this.addItem}/>
				<TaskList data={this.state.data}/>
			</React.Fragment>
		);
	}
}

export default TaskApp;
