import React from 'react'

class Tcomp extends React.Component {
    // 构造器函数，如果没有声明，react默认添加
    constructor (props) {
      // ES6的固定写法 class的继承
      super(props);
      // 组件内部的状态，setState
      this.state = {
        name: 18,
        count: 0,
        isShow: true
      }
      // this.handeAdd = this.handeAdd.bind(this);
    }

    handeAdd = () => {
      console.log('this绑定');
      this.setState(state => ({
        count: ++state.count
      }))
      this.props.getChildDate(this.state.count);
    }

    handleClick = () => {
        this.setState(state => ({
            isShow: !this.state.isShow
        }))
    }

    render () {
      const {name, age} = this.props;
      return (
        <div className="box">
          { this.state.isShow ? <h4>类组件</h4> : ''}
          Class : {this.state.name} - {age} - {name}
          {/* <button onClick={this.handeAdd.bind(this)} > 点击加1 — {this.state.count}</button> */}
          <button onClick={this.handeAdd} > 点击加1 — {this.state.count}</button>
          <button onClick={this.handleClick}>显示隐藏</button>
        </div>
      )
    }
  }

export default Tcomp