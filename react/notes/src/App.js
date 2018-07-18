import React, { Component } from 'react';
import './App.css';  //样式
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
// .vue里面 template js style
// react .js 组件类  继承的概念 template？jsx 语法 render()
class App extends Component {
  render() {
    return (

      <Notes />
    );
  }
}

export default App;
