import React, { Component } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    console.log('id to delete is ' + id);
    const new_todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({todos: new_todos});
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
          <h1>Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /><br></br><br></br>
          <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
