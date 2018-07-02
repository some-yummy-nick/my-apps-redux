import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Textarea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: props.text
		}
	}

	setValue = (e) => {
		this.setState({
			text: e.currentTarget.value
		});
	};

	render() {
		return (
			<div>
				<textarea name="" id="" cols="30" rows="10" value={this.state.text} onChange={this.setValue}></textarea>
				<div className="score">{this.state.text.length}</div>
				<div>{this.props.name}</div>
			</div>
		)
	}
}

Textarea.defaultProps = {
	name: 'Stranger',
	text: "male"
};

Textarea.propTypes={
	text:PropTypes.string,
}

class App extends Component {
	render() {
		return (
			<Textarea text={"Bob"}/>
		);
	}
}

export default App;
