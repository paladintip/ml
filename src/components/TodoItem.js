import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
       
        return{
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',

            background: '#f4f4f4',
            borderBottom: '2px #ccc dotted',
            padding: '10px'
        }
        
    }

    

    render() {
        const{id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>{''}
        
               <h3>{title}</h3>
               <button style={btnStyle} onClick ={this.props.deleteTodo.bind(this, id)}>x</button>
                
            </div>
        )
    }
}
const btnStyle = {
    background:'#ff0000',
    coloe: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

