import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Usurvey from './components/Usurvey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>U-Survey</h2>
        </div>
        <Usurvey />
      </div>
    );
  }
}

export default App;
