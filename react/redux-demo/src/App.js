import React, { Component } from 'react';
import './App.css';
import Demo from '../src/components/Demo/Demo.js'
import Child from '../src/components/Child/Child.js'
class App extends Component {
  handleSomething = (e) => {
    this.setState({ value: e.target.value });
  }
  state = { value: 0 }
  render() {
    return (
      <div className="App">
        {/* <Demo /> */}
        {this.state.value}
        <Child handleSomething={this.handleSomething} />
      </div>
    );
  }
}

export default App;
