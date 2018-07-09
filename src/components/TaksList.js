import React from 'react';
import PropTypes from 'prop-types';

export default function TaskList(props) {
	return (
		<ul>
			{props.data.map((item, index) => {
				return <li key={index}>{item}</li>
			})}
		</ul>
	)
}

TaskList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string)
};