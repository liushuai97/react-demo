import React from 'react';
// 提供DOM操作的功能库
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

// render 执行渲染
ReactDOM.render(
  // 渲染的组件、元素
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 渲染的位置
  document.getElementById('root'),
  // 回调
  () => { console.log(
    '渲染成功'
  ) }
);
