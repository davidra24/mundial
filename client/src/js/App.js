import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../css/App.css';
import LogIn from '../components/logIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trivia Mundialera</h1>
        </header>
        <LogIn />
      </div>
    );
  }
}

export default App;
