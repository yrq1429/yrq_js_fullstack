import React, { Component } from 'react';
import HelloMessage from './components/HelloMessage'
import './App.css';

class App extends Component {
  render() {
    const arr = [
      <h1 key="1">Hello World</h1>,
      <h2 key="2">react is awesome</h2>
    ]
    return (
      <div className="App">
        <HelloMessage name="John" />
        <ul>
          {
            arr
          }
        </ul>
      </div>
    );
  }
}

export default App;
