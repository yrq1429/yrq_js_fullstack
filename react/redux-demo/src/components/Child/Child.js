import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <input type="text" onChange={this.props.handleSomething} />
    );
  }
}

export default App;
