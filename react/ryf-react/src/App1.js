import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const names = ['Alice', 'Emily', 'zkdd']
    return (
      <div className="App">
        <ul>
          {
            names.map( (name, index) => {
              return (
                <div key="index">Hello, { name }</div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
