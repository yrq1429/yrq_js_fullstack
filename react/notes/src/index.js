import React from 'react';
// react 模板编译 => react-dom
import ReactDOM from 'react-dom';
import './index.css';  //webpack 打包
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
