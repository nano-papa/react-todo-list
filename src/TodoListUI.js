import React from 'react';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div style={{ padding: "10px" }}>
            <Input placeholder="Basic usage"
                value={props.inputValue}
                onChange={props.handleInputChange}
                style={{ width: '300px', marginRight: '10px' }} />
            <Button type="primary" onClick={props.handleClick} >提交</Button>
            <List
                style={{ margin: '10xp', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item>
                        <span>{item}</span>
                        <Button type="danger" onClick={() => props.handleDelClick(index)}>删除</Button>
                    </List.Item>
                )}
            />
        </div>
    )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ padding: "10px" }}>
//                 <Input placeholder="Basic usage"
//                     value={this.props.inputValue}
//                     onChange={this.props.handleInputChange}
//                     style={{ width: '300px', marginRight: '10px' }} />
//                 <Button type="primary" onClick={this.props.handleClick} >提交</Button>
//                 <List
//                     style={{ margin: '10xp', width: '300px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item>
//                             <span>{item}</span>
//                             <Button type="danger" onClick={() => this.props.handleDelClick(index)}>删除</Button>
//                         </List.Item>


//                     )}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI;