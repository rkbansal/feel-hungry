import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default withRouter(App);