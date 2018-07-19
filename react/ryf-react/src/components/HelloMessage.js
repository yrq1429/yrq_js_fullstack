import React, { Component } from 'react';
import '../App.css';

class HelloMessage extends Component {
  render() {
    return <div>hello { this.props.name }</div>
  }
}

export default HelloMessage;
