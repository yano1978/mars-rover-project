
import React, { Component } from 'react';
import Mars from "./components/Mars";

class App extends Component {
  state = {
    commands: '',
    commandsToExecute: '',
    execute: false,
    startPosition: '00N'
  };

  addCommand = (e) => {
    this.setState({
      commands: this.state.commands + e.target.value
    })
  };

  runSample = (e) => {
    if (e.target.value === 'LMLMLMLMM') {
      document.getElementById('startPosition').value = '12N';
    } else {
      document.getElementById('startPosition').value = '33E';
    }
    this.setState({
      commands: e.target.value
    });
  };

  execute = () => {
    let startPosition = this.startInput.value;
    if (document.getElementById('movement').value === '') {
      alert('Add values to launch the mission');
    }
    if (/^[0-4][0-4][NEWS]$/.test(startPosition)) {
      this.setState({
        execute: true,
        commandsToExecute: this.state.commands,
        startPosition
      });
    } else {
      alert('Invalid start position.');
    }
  };

  clear = () => {
    document.getElementById('startPosition').value = '00N';
    this.setState({
      commands: '',
      execute: false,
      commandsToExecute: ''
    });
  };

  validateStartPosition = (e) => {
    e.target.checkValidity();
  };

  stopExecute = () => {
    this.setState({
      execute: false
    });
  };

  render() {
    let position = this.state.startPosition || '00N';
    position = position.split('').join(' ');
    return (
      <div className={'app'}>
        <header className={`control-panel`}>
          <h1 className={'app-name'}>Mars Rover Project</h1>
          <div className={'start-position'}>
            <label
              htmlFor="startPosition"
            >
              Start Position (Eg; 00N):
            </label>
            <input type="text"
              id="startPosition"
              maxLength={3}
              required
              pattern={'^[0-4][0-4][NEWS]$'}
              defaultValue={'00N'}
              onBlur={this.validateStartPosition}
              ref={(elm) => {
                this.startInput = elm
              }}
            />
          </div>
          <div className='commands'>
            <button value='M' onClick={this.addCommand}>Move</button>
            <button value='L' onClick={this.addCommand}>Left</button>
            <button value='R' onClick={this.addCommand}>Right</button>
          </div>
          <div className='execution'>
            <button onClick={this.clear} className='secondary'>Reset</button>
            <input id="movement" type="text" readOnly value={this.state.commands} />
            <button className={'cta'} onClick={this.execute}>Launch</button>
          </div>
          <div className='samples'>
            <label>Launching tests: </label>
            <ul>
              <li>
                <button value={'LMLMLMLMM'} onClick={this.runSample}>1 2 N | LMLMLMLMM</button>
              </li>
              <li>
                <button value={'MMRMMRMRRM'} onClick={this.runSample}>3 3 E | MMRMMRMRRM</button>
              </li>
            </ul>
          </div>
        </header>
        <Mars
          size={5}
          position={position}
          commands={this.state.commandsToExecute}
          execute={this.state.execute}
          onDone={this.stopExecute}
        />
      </div>
    )
  }
}

export default App;
