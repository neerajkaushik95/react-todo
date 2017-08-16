import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text">
          </form>
          <div className="Todo-list">
            <ul>
              <li>
                  <input type="text"> create static Ui

              </li>
              <li>
                  <input type="text"> create dynamic Ui

              </li>
                <input type="text" />
            </ul>
          <div>
        </div>
      </div>
    );
  }
}

export default App;
