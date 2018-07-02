import React, { Component } from 'react';
import './App.css';
class Textarea extends Component {

	constructor () {
		super();
		this.state = {
			text: "bob"
		}
	}

	setValue=(e)=>{
		this.setState({
			text:e.currentTarget.value
		});
	};

	render() {
		return (
			<div>
				<textarea name="" id="" cols="30" rows="10" value={this.state.text} onChange={this.setValue}></textarea>
			<div className="score">{this.state.text.length}</div>
			</div>
		)
	}
}

class App extends Component {
  render() {
    return (
		    <Textarea/>
    );
  }
}

export default App;
