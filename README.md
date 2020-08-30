React 入门

目录说明

- config webpack配置文件

- public  公共文件
index.html  公共的template模版
favicon.ico 浏览器小图标

- src  源码目录

.gitignore  git 提交文件的配置项
package.json  项目包关联文件，webapck配置项，项目依赖的第三方包
yarn.lock  yarn安装版本号的同步

JSX详解与实战

什么是JSX

一切皆JS  all in js，所有内容HTML、CSS、JS都写入JS文件  
推荐使用 JavaScript and XML （可拓展标记性语言）

说明：JSX是react中的一项技术，不是一种全新的语言，js的扩展

JSX原理

底层通过 React.createElement 进行编译转化

规则：

1、只允许有一个顶层元素
2、插值{ }

标签的类型

DOM标签： ... div h1 h2
自定义标签： 组件（首字母必须大写）
内联样式
只支持表达式
事件驼峰命名
注释方式
拓展运算符 属性展开 ...


虚拟DOM & 非DOM属性

virtual Dom  虚拟DOM

是属于React的一个特点，具有批处理，底层diff算法的处理


dangerousSetInnerHTML  === innerHTML （容易导致  xss 攻击）

动态传递对象 {__html: '<p>需要插入的内容</p>'}

ref

相当于原生HTMl的ID属性
无法在函数组件中使用
可以在函数内部使用

key

提高渲染性能  唯一标识
方便识别那些DOM改变，缩小渲染比较范围

index（不推荐）


props 属性与应用

什么是props

props 是只读的  - react中数据流是单向的，因为组件需要复用，可以利用state 作为中间人，修改props的值
组件化开发  props属性  state状态
props 对外的接口，接口外部传入的数据，一般都是父子组件之间传值

props 接口任意类型的值 实现子组件到父组件的传值  函数传参


字符串 “”  非字符串 {}


函数组件和类组件的区别

函数组件只能只用 props  无状态组件，函数组件的性能高于类组件，拥有hook之后可以使用state
类组件可以使用 state 生命周期钩子


事件的监听this的绑定

this
  与执行上下文有关系
  函数调用 严格模式  this -》 undefined 非严格模式 window
  作为方法调用  谁调用指向谁
  call， apply第一个参数


React 中用Class创建的组件  需要手动绑定 this  ES6 class

this四种绑定方式

1、constructor bind 绑定 
2、直接JSX元素进行绑定 (会导致每次渲染组件时，都会创建一个新的函数，影响渲染的性能，不推荐)
3、使用箭头函数，ES6类字段 推荐
4、使用箭头函数，在JSX元素中直接操作 不推荐


State(状态)介绍与应用

什么是State

props 对外的接口  只具备可读性
state 组件内部的状态 控制元素的现实隐藏  可修改

setState 修改 状态值

React 控制的事件处理程序 -》 进行异步更新，不会立马更新组件   批量延迟更新  多个setState调用的情况下，会进行合并的处理，避免组件的重复渲染问题

生命周期钩子函数中处理  -》 同上

同步更新，原生JS绑定的事件 setTimeout

如何使用

组件的State如何划分

state props 最终的结果都是影响UI展示

原则
1、让组件尽可能少状态  UI渲染、数据展示、没有复杂交互  推荐使用：props、无状态组件、 纯函数  无交互 无数据逻辑层的展示
2、随着事件产生变化的数据  推荐使用：state 页面存在交互行为、类组件

props 与 state 对比

1、组件内的数据，JS对象，保存信息  都可以控制组件的形态 UI
2、props 父组件可以转入的，定义外部组件的接口  this.props props
3、props 只读的  不能直接修改  可以通过setState进行间接修改
4、state 组件内部的状态，作用范围只限于当前组件，理解为私有变量  使用state来跟踪状态（控制元素的显示隐藏）  setState进行数据修改


React  组件  类组件独有  生命周期函数

挂载阶段

constructor  
需要接受父组件的 props super(props)  
初始化一些操作 state处理 this绑定

componentWillMount  
组件即将挂载， render之前调用 只会调用一次  
很少使用 
setState 不会引起重新渲染 16.13 版本过时
使用同步的 setState 不会出发额外的render处理
产生副作用，或者订阅

render  
唯一不能省略的方法
返回react元素  
state props 表述组件的UI JSX语法定义
不负责组件的实际渲染工作

注意：
必须是一个纯函数，在这里不能改变State，放入其他生命周期函数中处理，不能执行任何有副作用的操作

作用：
计算props/state 返回对应的结果
React.createElement jsx 转换为 vDom虚拟对象模型

componentDidMount
组件挂载到DOM后触发，只会调用一次，获取真实DOM元素
向服务端请求数据
1、保证获取到服务端数据时，组件已经处于挂载状态，直接操作DOM，初始化第三方库
2、保证在任何情况下，只会调用一次，不会发送多余的数据请求
只能在浏览器端调用，服务端不可能产生DOM树

作用：
1、数据可以获取到，真实DOM也可以获取到
2、可以进行数据请求，进行数据修改
3、操作真实DOM，主要用于第三方库的实例化

setState 引起组件的重新渲染


更新阶段

componentWillReceiveProps (nextProps)
组件将要接收到props，只在props引起的组件更新过程中触发 this.setState也不会被触发
只要父组件的render函数被调用，无论父组件传给子组件props有没有改变都会触发

*** shouldComponentUpdate(nextProps, nextState)  false
通知React组件是否更新，有权利阻止组件的更新
尽量遵循默认行为，状态改变组件就会重新渲染
要求必须有返回结果，返回的 true / false
减少一些组件不必要的渲染，提高性能
不能调用setState

componentWillUpdate (nextProps, nextState)
更新发生前，将要更新时执行，一般很少使用
不能调用setState

componentDidUpdate (prevProps, prevState)
更新完成，调用  有机会操作DOM
判断是否发送网络请求，比对props state 是否改变
适合发送网络请求

卸载阶段

*** componentWillUnmount
组件从DOM中被卸载的过程，清理工作
销毁一些定时器，取消一些网络请求，移除一些事件监听

错误处理阶段

componentDidCatch (error, info)
错误捕获


可控组件与不可控组件

针对表单而言

受控组件
- 依赖状态，默认值实时映射到状态 state
- 必须使用onChange事件，进行值的处理
- 类似双向绑定

优点

符合React数据流
修改使用方便，不需要修改DOM
便于数据处理

非受控组件
- 不受控制，获取DOM，操作DOM才能获取到数据 ref
- defaultValue 设置默认值

优点

很容易与第三方组件结合


React 事件和This

事件

直接写在JSX中
on + EventType  onClick  onChange onBlur ... 驼峰命名 
不可以加在自定义组件标签上，放在原生的JSX标签中

event事件对象 在React中封装的，不需要考虑兼容性，不是原生JS对象

事件监听的This

this绑定形式
1、constructor bind 推荐
2、ES6类字段 箭头函数 推荐
3、render 直接 bind
4、render 箭头函数

事件传参

传递 ID 索引

1、bind  onClick={this.subClick.bind(this, 'ABC')}
2、箭头函数 onClick={(e) => {this.sumClick(e, 'DEF')}}