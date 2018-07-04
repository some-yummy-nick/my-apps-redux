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
		this.state = {
			data: this.props.initialData,
			sortby: null,
			descending: false,
			edit: null
		}
	}

	sort = (e) => {
		var column = e.target.cellIndex;
		var data = this.state.data.slice();
		var descending = this.state.sortby === column && !this.state.descending;
		data.sort(function (a, b) {
			return descending
				? (a[column] < b[column] ? 1 : -1)
				: (a[column] > b[column] ? 1 : -1);
		});
		this.setState({
			data: data,
			sortby: column,
			descending: descending,
		});
	}

	showEditor = (e) => {
		this.setState({
			edit: {
				row: parseInt(e.target.dataset.row, 10),
				cell: e.target.cellIndex,
			}
		});
	}

	save = (e) => {
		e.preventDefault;
		var input = e.target.firstChild;
		var data = this.state.data.slice();
		data[this.state.edit.row][this.state.edit.cell] = input.value;
		this.setState({
			edit: null,
			data: data,
		});
	}

	search = (e) => {
		var needle = e.target.value.toLowerCase();
		if (!needle) {
			this.setState({data: this.props.initialData});
			return;
		}

		var searchdata = this.props.initialData.filter(function (dat) {
			return dat.toString().toLowerCase().indexOf(needle) > -1;
		});

		this.setState({data: searchdata});
	}

	render() {
		return (
			<div>
				<form><input type="text" placeholder="search" onChange={this.search}/></form>
				<table>
					<thead onClick={this.sort}>
					<tr>
						{headers.map((header, index) => {
								if (this.state.sortby === index) {
									header += this.state.descending ? ' \u2191' : ' \u2193'
								}
								return <th key={index}>{header}</th>
							}
						)}
					</tr>
					</thead>
					<tbody onDoubleClick={this.showEditor}>
					{this.state.data.map((row, rowindex) =>
						<tr key={rowindex}>{row.map((cell, cellindex) => {
							var content = cell;
							var edit = this.state.edit;
							if (edit && edit.row === rowindex && edit.cell === cellindex) {
								content = <form onSubmit={this.save}><input type="text" defaultValue={cell}/></form>;
							}
							return <td key={cellindex} data-row={rowindex}>{content}</td>
						})
						}
						</tr>)}
					</tbody>
				</table>
			</div>
		);
	}
}

Table.propTypes = {
	headers: PropTypes.arrayOf(
		PropTypes.string
	),
	initialData: PropTypes.arrayOf(
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
