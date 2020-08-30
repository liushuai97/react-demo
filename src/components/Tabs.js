import React from 'react';

class Tabs extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            userName: '受控组件默认值',
            tab: 1,
            textval: '212121'
        }
    }

    handleChange = () => {
        this.setState({
            tab: 1 + this.state.tab,
        })
    }

    subChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handTextChange = (e) => {
        this.setState({
            textval: e.target.value
        })
        console.log(this.state)
    }

    subClick (params, event) {
        console.log('我是参数', params);
    }

    sumClick (event, params) {
        console.log('我是参数', params);
    }

    render () {
        return (
            <>
                <ul>
                    <li onClick={this.handleChange}>Num {this.state.tab}</li>
                    <li>
                        <input type="text" value={this.state.userName} onChange={this.subChange}/>
                    </li>
                    <li>
                        <textarea value={this.state.textVal} onChange={this.handTextChange}></textarea>
                    </li>
                    <li>
                        <button onClick={this.subClick.bind(this, 'ABC')}>传递参数</button>
                    </li>
                    <li>
                        <button onClick={(e) => {this.sumClick(e, 'DEF')}}>传递参数</button>
                    </li>
                </ul>
            </>
        )
    }
}

export default Tabs;