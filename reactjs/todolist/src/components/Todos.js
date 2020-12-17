import React, { Component } from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

export default class Todos extends Component {


    render() {
        return this.props.todos.map((todo) => (
           <Todoitem  className="container" key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }

}
//Proptypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired
// }