import React, { Component } from 'react';
import store from '../store/';

class App extends Component {
  render() {
	  const state = store.getState();
	  return (
      <div className="Todo">

      </div>
    );
  }
}

export default App;
