import React, { Component } from 'react';
import './App.css';

class UserGist extends Component {
  state = {
    username: '',
    lastGistUrl: ''
  }
  componentDidMount () {
    const lastGist = data[0]
    fetch(this.props.source)
      .then(data => data.json())
      .then(data => {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        })
      })
  }
  render () {
    return (
      <div>
        { this.state.username }'s last gist is <a href="{this.state.lastGistUrl}">here</a>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGist source="http://api.github.com/users/octocat/gists" />
      </div>
    )
  }
}

export default App;
