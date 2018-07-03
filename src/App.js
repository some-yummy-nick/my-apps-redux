import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

var headers = [
	"Book", "Author", "Language", "Published", "Sales"
];

var data = [
	["The Lord of the Rings", "J. R. R. Tolkien",
		"English", "1954–1955", "150 million"],
	["Le Petit Prince (The Little Prince)", "Antoine deSaint-Exupéry",
		"French", "1943", "140 million"],
	["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
		"English", "1997", "107 million"],
	["And Then There Were None", "Agatha Christie",
		"English", "1939", "100 million"],
	["Dream of the Red Chamber", "Cao Xueqin",
		"Chinese", "1754–1791", "100 million"],
	["The Hobbit", "J. R. R. Tolkien",
		"English", "1937", "100 million"],
	["She: A History of Adventure", "H. Rider Haggard",
		"English", "1887", "100 million"],
];

class Table extends Component {

	constructor(props) {
		super(props);
		this.state={
			data:this.props.initialData
		}
	}
	render() {
		return (
			<table>
				<thead>
				<tr>
					{headers.map((header, index) => <th key={index}>{header}</th>)}
				</tr>
				</thead>
				<tbody>
				{this.props.initialData.map((row, index) =>
					<tr key={index}>{row.map((cell, index) => {
							return <td key={index}>{cell}</td>
						})
					}
					</tr>)}
				</tbody>
			</table>

		);
	}
}

Table.propTypes={
	headers:PropTypes.arrayOf(
		PropTypes.string
	),
	initialData:PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.string
		)
	)
}


class App extends Component {
	render() {
		return (
			<Table headers={headers} initialData={data}/>
		);
	}
}

export default App;
