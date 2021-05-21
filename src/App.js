
import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mars Rover Project</h1>
        </header>
        <Grid/>
      </div>
    );
  }
}

export default App;
