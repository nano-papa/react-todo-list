import React, { Component } from 'react';
import PropTypes from "prop-types";
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        const {content } = this.props;
        if(nextProps.content !== content){
            return true;
        }else{
            return false;
        }
     }
    render() {
        const { content } = this.props;
        return (<li
            onClick={this.handleItemDelete}
            dangerouslySetInnerHTML={{ __html: content }}
        >
        </li>
        )
    }
    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行了，子组件这个生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }
    handleItemDelete() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}
TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    handleItemDelete: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    content: 'hhahaha',
    index: 1,
    handleItemDelete: () => { }
}

export default TodoItem;