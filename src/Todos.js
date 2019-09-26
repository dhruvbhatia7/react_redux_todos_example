import React, { Component } from 'react';
import store from './redux/store';
import { delTodo } from './redux/actions';
import { connect } from 'react-redux';


class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos
            });
        })
    }

    deleteTodo = (id) => {
        console.log('inside delete todo in todosjs');
        console.log('target value i.e id is ');
        this.props.delTodo(id);
    }

    render() {
        return(
            <div>
            {this.state.todos.length ? (
                this.state.todos.map(todo => {
                    return(
                        <div onClick={() => this.deleteTodo(todo.id)} key={todo.id}>
                            <hr></hr>{todo.content}<br></br><br></br>
                        </div>
                    )
                })
            ) : (
                    <div>You have no todos left</div>
            )}
            </div>
        );
    }
}


export default connect(
    null,
    ({ delTodo })
)(Todos);

