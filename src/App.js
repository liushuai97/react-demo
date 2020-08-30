import React from 'react';
import Component1 from './components/Component1';
import './assets/css/App.css';
import Tabs from './components/Tabs';

// 根组件  函数组件  无状态推荐使用函数组件
function App() {
  // const divTitle = '我是APP';

  // 内联样式
  // const divStyle = {
  //   color: 'red',
  //   fontSize: '12px'
  // }

  // JSX属性通过驼峰命名书写DOM元素的属性，  dataid 除外
  return (
    // 占位符
    // 第一种写法
    // <Fragment>
    //   <div title={divTitle} className="App" tabIndex="1">
    //     <h2>Hello word</h2>
    //     <label htmlFor="id"></label>
    //   </div>
    // </Fragment>
    // 第二种写法
    <>
      {/* <div style={divStyle} title={divTitle} className="App" tabIndex="1"> */}
        <Component1 />
        <Tabs/>
        {/* <h2>Hello word</h2> */}
        {/* <label htmlFor="id"></label> */}
        {/* 包裹注释 */}
        {/* <button onClick={handeClick}>点击事件</button> */}
      {/* </div> */}
    </>
  );
}

export default App;
