import React, { Component } from 'react';
import './scss/index.scss';
import Todos from './components/Todos';
import Header from './components/layout/header'
class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Test todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Test todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'Test todo 3',
        completed: false
      },

    ]
  }
  //Toggle todo
  markComplete = (id) => {
    this.setState({
      todo: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  // Delete Todo
  delTodo = id => {

    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })

  };

  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          <div className="container">
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
        </ul>
      </div>
    );
  }
}

export default App;
