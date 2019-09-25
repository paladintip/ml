import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class PredictionResult extends Component {
    

    

    render() {
        const{probability, hour} = this.props;
        let textContent = <p></p>
        let resultContent =  <h3></h3>
        if (probability === null) {
            textContent = <p >Give the machine an hour of the day (1-24), and it will return the probability of me beginning work at that hour of the day.</p>;
        } else {
            textContent = <p >The probability of me starting my work at {hour}:00 is . . .</p>
            
            resultContent = <h3>{probability.toPrecision(4)}%</h3>
        }
         
        return (
            <div className="prediction-result-container">
                 <div className="text-content">{textContent}</div>
                 <div className="result-content">{resultContent}</div>
            </div>
        )
    }
}

PredictionResult .propTypes = {
    probability: PropTypes.number,
    hour: PropTypes.number
}

export default PredictionResult 

