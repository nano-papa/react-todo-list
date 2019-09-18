import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { connect } from 'react-redux';
// import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';
import { getInitList, getInputChangeAction, initListAction, getTodoList, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

import TodoListUI from './TodoListUI';
import { dispatch } from 'rxjs/internal/observable/pairs';

const TodoList = (props) => {
    const { inputValue, handleClick, list, handleInputChange, handleDelClick } = props;
    return (<TodoListUI
        inputValue={inputValue}
        handleClick={handleClick}
        list={list}
        handleInputChange={handleInputChange}
        handleDelClick={handleDelClick}
    ></TodoListUI>)
}

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = store.getState();
//         // console.log(store.getState());
//         // this.handleInputChange = this.handleInputChange.bind(this);
//         // this.handleStoreChange = this.handleStoreChange.bind(this);
//         // this.handleClick = this.handleClick.bind(this);
//         // this.handleDelClick = this.handleDelClick.bind(this);
//         // store.subscribe(this.handleStoreChange)
//     }
//     render() {
//         const { inputValue, handleClick, list, handleInputChange, handleDelClick } = this.props;
//         return (<TodoListUI
//             inputValue={inputValue}
//             handleClick={handleClick}
//             list={list}
//             handleInputChange={handleInputChange}
//             handleDelClick={handleDelClick}
//         ></TodoListUI>)
//     }

//     componentDidMount() {
//         // const action = getInitList();
//         // this.props.dispatch(action);
//         this.props.getList();
//         // const action = getTodoList();
//         // store.dispatch(action);
//         // axios.get('/list').then(res => {
//         //     console.log(res);
//         //     const data = res.data;
//         //     const action = initListAction(data);
//         //     store.dispatch(action);
//         //     console.log(action);
//         // })
//     }
//     // handleClick(e) {
//     //     const action = getAddItemAction();

//     //     store.dispatch(action);
//     // }
//     // handleInputChange(e) {
//     //     const action = getInputChangeAction(e.target.value);
//     //     store.dispatch(action);
//     // }
//     // handleDelClick(index) {
//     //     console.log(index);
//     //     const action = getDeleteItemAction(index);
//     //     store.dispatch(action);
//     // }
//     // handleStoreChange() {
//     //     this.setState(store.getState());
//     // }
// }

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputValue: 'hello',
//             list: [],
//         };
//         this.addList = this.addList.bind(this);
//         this.handleItemDelete = this.handleItemDelete.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
//     //在组建即将挂在到页面的时候执行，但是还没有挂载
//     componentWillMount() {
//         axios.get('/api/todoList').then(res=>{
//             console.log(res);
//         })
//         console.log('componentWillMount');
//     }
//     // 当state和props发生改变的时候，就会执行render
//     render() {
//         console.log('render')
//         return (
//             <Fragment>
//                 {/* dsfhasdfasd */}
//                 <div>
//                     <label htmlFor="xxi">输入内容</label>
//                     <input
//                         ref={(input => { this.input = input })}
//                         id="xxi"
//                         className="input"
//                         value={this.state.inputValue}
//                         onChange={this.handleInputChange} />
//                     <button onClick={this.addList}>提交</button>
//                 </div>
//                 <ul ref={(ul) => { this.ul = ul }}>
//                     {this.getItem()}
//                 </ul>
//             </Fragment>
//         )
//     }
//     componentDidMount() {
//         console.log('componentDidMount');
//     }
//     //
//     componentWillReceiveProps(){
//         console.log('componentWillReceiveProps');
//     }
//     // 组件被更新之前，会执行
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('shouldComponentUpdate');
//         return true;
//     }
//     // 组件在更新之前，shouldComponentUpdate返回结果是true之后执行，
//     componentWillUpdate(){
//         console.log('componentWillUpdate');
//     }
//     // componentWillUpdate执行结束之后在执行
//     componentDidUpdate(){
//         console.log('componentDidUpdate');
//     }
//     //当这个组件即将从页面剔除的时候，才会执行
//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }
//     getItem() {
//         return this.state.list.map((item, index) => {
//             return (
//                 // 当父组件中的render执行的时候，子组件的render也会执行
//                 <TodoItem content={item} index={index}
//                     handleItemDelete={this.handleItemDelete}
//                     key={index}
//                 />
//             )
//         })
//     }
//     handleItemDelete(index) {
//         console.log(index);
//         this.setState((preState) => {
//             const list = [...preState.list];
//             list.splice(index, 1)
//             return {
//                 list,
//             }
//         })
//     }
//     addList() {
//         // const { inputValue, list } = this.state;
//         this.setState((preState) => ({
//             list: [...preState.list, preState.inputValue],
//             inputValue: ''
//         }), () => {
//             console.log(this.ul.querySelectorAll("li").length);
//         })


//     }
//     handleInputChange(e) {
//         const { value } = this.input;
//         this.setState(() => ({
//             inputValue: value
//         }))
//     }
// }
// 将store中的state和当前连接组件的props建立连接(产生一种映射关系)
// 将store中的state传入当前组件的props中
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// 把store中的dispatch挂载到当前组件的props中
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClick(e) {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleDelClick(index) {
            console.log(index);
            const action = getDeleteItemAction(index);
            dispatch(action);
        },
        getList() {
            const action = getInitList();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);