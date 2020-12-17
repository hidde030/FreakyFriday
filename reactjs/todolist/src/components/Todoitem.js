import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            display: 'flex',
            background: '#f4f4f4',
            padding: '10px',
            width: '100%',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li style={this.getStyle()}>


                <input className="item" style={{ flexBasis: '0.5' }} type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <p className="item-center" > {title}</p>
                <button  onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>

            </li>
        )
    }
}
// //Proptypes
// Todoitem.propTypes = {
//     todos: PropTypes.object.isRequired
// }

const btnStyle = {
    display: 'flex',
    background: '#004BA8',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem'
}
export default Todoitem
