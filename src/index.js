import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style.css';
import store from './store/';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render);
