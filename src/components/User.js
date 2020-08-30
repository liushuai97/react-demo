import React from 'react';

User.defaultProps = {
    age: 18
}

const name = React.createRef();

function getName () {
  console.log(name.current.value)
}

function User(props){
    return (
      <div>
        <h2>我是User组件</h2>
        <p>{props.name} - {props.age}</p>
        
        <label htmlFor="name">名称：</label>
        <input type="text" id="name" defaultValue="肥瘦" ref={name}/>
        <button onClick={getName}>获取名称</button>
      </div>
    )
  }

export default User;