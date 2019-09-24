import React, { Component } from 'react'

export class PredictForm extends Component {
    state = {
        hour: ''
    }

    change = (e) => this.setState({[e.target.name]: e.target.value})
    submit = (e) => {
        e.preventDefault()
        this.props.predict(this.state.hour)
        this.setState({hour: ''})
    }
    render() {
        return (
            <form onSubmit ={this.submit} style={{display: "flex", padding: "5px"}}>
                <input type="text" name='hour' style={{flex: '10'}} placeholder="Find probability ..." value={this.state.title}
                onChange={this.change}/>
                <input type="submit" value="Add" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default PredictForm
