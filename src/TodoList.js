import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoAdd extends Component {

	static propTypes = {
		item: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			item: ""
		}
	}

	onChange = (e) => {
		this.setState({item: e.currentTarget.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.item);
		this.setState({item: ''})
		this.refs.item.focus();
	}


	render() {
		return <form onSubmit={this.handleSubmit}>
			<input type="text" onChange={this.onChange} ref="item" value={this.state.item}/>
			<button type="submit">Добавить</button>
		</form>;
	}
};

class TodoList extends Component {

	static propTypes = {
		todos: PropTypes.array
	}

	constructor(props) {
		super(props);
		this.state = {
			todos: this.props.todos || []
		}
	}

	addTodo = (item) => {
		this.setState({todos: this.state.todos.concat([item])});
	}

	render() {
		return (
			<div>
				<TodoItems items={this.state.todos}/>
				<TodoAdd addTodo={this.addTodo}/>
			</div>
		);
	}
}


class TodoItems extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired
	}

	constructor() {
		super();
	}

	render() {
		return <ul>{this.props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
	}
};

export default TodoList;
