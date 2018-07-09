import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TaskAdd extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: ""
		}
	}

	onChange = (e) => {
		this.setState({
			item: e.currentTarget.value
		})
	};

	handleClick = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.item);
		this.setState({
			item:""
		});
		this.refs.input.focus()
	};

	render() {
		return (
			<form onSubmit={this.handleClick}>
				<label>
					<input onChange={this.onChange} ref="input" value={this.state.item} type="text"/>
				</label>
				<button type="submit">Добавить задачу</button>
			</form>
		)
	}

}

TaskAdd.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string)
};