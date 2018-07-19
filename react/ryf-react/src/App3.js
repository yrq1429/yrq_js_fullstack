import React, { Component } from 'react';
import NoteList from './components/NoteList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList>
          <span>hello</span>
          <span>world</span>
        </NoteList>
      </div>
    )
  }
}

export default App;
