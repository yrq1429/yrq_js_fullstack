import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './App.css';



class App extends Component {
  state = {
    value: 'Hello！'
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const value = this.state.value
    return (
      <div className="App">
        <div>
          <input type="text" value={value} onChange={this.handleChange.bind(this)} />
          <p>{value}</p>
        </div>
      </div>
    )
  }
}

export default App;
