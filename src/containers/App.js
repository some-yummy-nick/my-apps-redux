import React, {Component} from 'react';
import store from '../store/';

import {dispatchInputAction, dispatchInitAction, dispatchSubmitAction} from "../actions";

class App extends Component {
	componentDidMount() {
		function da() {
			dispatchInitAction()
		}

		setTimeout(da, 100);
	}
	render() {

		return (
			<div className="Todo">
				<ul>
					{store.getState().newData.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>

				<div className="pagination">
					<ul className="pagination__list">
						<li className="pagination__item"><a href="#" className="pagination__link" onClick={dispatchInitAction}>1</a></li>
						<li className="pagination__item"><a href="#" className="pagination__link" onClick={dispatchInitAction}>2</a></li>
						<li className="pagination__item"><a href="#" className="pagination__link" onClick={dispatchInitAction}>3</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
