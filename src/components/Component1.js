import React from 'react';
import Tcomp from './Tcomp';
import User from './User';

// 创建一个ref
const userRef = React.createRef();
const inputRef = React.createRef();

function Component1() {
    const props = {
        name: '张三',
        // age: 14
    }

    const handeClick = () => {
        console.log('点击事件', userRef);
        inputRef.current.focus();
    }    

    const getChildDate = (data) => {
        console.log('子组件', data);
    }

    return (
        <>
            <Tcomp getChildDate={getChildDate} {...props} ref={userRef} />
            <User  {...props} />
            <input ytpe="text" ref={inputRef} />
            <button onClick={handeClick}>点击请求</button>
            <h1>组件</h1>
            <div dangerouslySetInnerHTML={{ __html: '<p>你好</p>' }}></div>
        </>
    )
}

// JSX 编译 React.createElement()
// function App() {
//   const divTitle = '我是APP';
//   const element = React.createElement(
//     'div',
//     {title: divTitle},
//     React.createElement(
//       'h2',
//       null,
//       'Hello word'
//     )
//   );
//   return element;


// JSX属性通过驼峰命名书写DOM元素的属性，  dataid 除外
// return (
//   <div title={divTitle} className="App" tabIndex="1">
//     <h2>Hello word</h2>
//     <label htmlFor="id"></label>
//   </div>
// );
// }


// 类组件
// class App extends React.Component{
//   render () {
//     return (
//       <div className="App">
//         <h2>Hello word</h2>
//       </div>
//     )
//   }
// }

export default Component1