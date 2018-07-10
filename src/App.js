import React, {Component} from 'react';
import Hello from './components/Hello';
import ButtonGroup from './components/ButtonGroup';
import store from './store/';

class App extends Component {

	render() {
		return (
			<React.Fragment>
				<Hello tech={store.getState().tech}/>
				<ButtonGroup technologies={['React', 'Elm', 'React-redux']}/>
			</React.Fragment>
		);
	}
}

export default App;