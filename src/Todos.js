import React from 'react'

const Todos = (props) => {

    const todoList = props.todos.length ? (
        props.todos.map(todo => {
            return(
                <div onClick={() => props.deleteTodo(todo.id)} key={todo.id}>
                    <hr></hr>{todo.content}<br></br><br></br>
                </div>
            )
        })
    ) : (
        <div>You have no todos left</div>
    )
    return (
        <div>
            {todoList}
        </div>
    );
}

export default Todos;