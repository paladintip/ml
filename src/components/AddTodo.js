import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    change = (e) => this.setState({[e.target.name]: e.target.value})
    submit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }
    render() {
        return (
            <form onSubmit ={this.submit} style={{display: "flex", ppading: "5px"}}>
                <input type="text" name='title' style={{flex: '10'}}placeholder="Add Todo ..." value={this.state.title}
                onChange={this.change}/>
                <input type="submit" value="Add" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
