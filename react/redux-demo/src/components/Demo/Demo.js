import React, { Component } from 'react';

class Demo extends Component {
  state = { num: 1 };
  handleIncrement() {
    this.setState({
      num: this.state.num + 1
    })
  };
  handleDecrement = () => {
    this.setState({
      num: this.state.num - 1
    })
  };
  componentDidMount() {
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });    
  }
  render() {
    const element = <h1>Hello React!</h1>
    return (
      <div className="App">
      <h1>{this.state.num}</h1>
      {element}
        <p className="text-center">
          <button
            onClick={this.handleIncrement.bind(this)}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn btn-danger my-2"
          >
            Decrease
          </button>
        </p>
      </div>
    )
  }
}

export default Demo