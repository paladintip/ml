import React, { Component } from 'react'

export class PredictionForm extends Component {
    state = {
        hour: ''
    }

    change = (e) => this.setState({[e.target.name]: e.target.value})
    submit = (e) => {
        e.preventDefault()
        if(this.state.hour !== '')
        {
            this.props.predict(this.state.hour)
        }
        
    }
    render() {
        return (
            <form onSubmit ={this.submit} className='prediction-form'>
                <input type="number" min="1" max="24" name='hour' placeholder="Input and hour 1-24" value={this.state.title}
                onChange={this.change} className='text-input'/>
                <input type="submit" value="Get Probability" className="btn"/>
            </form>
        )
    }
}

export default PredictionForm
