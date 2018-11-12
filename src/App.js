import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arm from './scenes/Arm/Arm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Arm />
        </header>
      </div>
    );
  }
}

export default App;
