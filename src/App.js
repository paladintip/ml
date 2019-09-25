import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PredictForm from './components/PredictForm';
import PredictionResult from './components/PredictionResult';
import Header from './components/layout/Header';
import About from './components/pages/About'
import './App.css';
import axios from 'axios';

class App extends React.Component {
state ={
    probability: null,
    hour: null
  };

 
  predict = (hour) =>{
    
    axios.get(`http://ml.edparko.com/api/predict.php?hour=${hour}`)
      .then(response => this.setState({ probability: response.data, hour: hour }))
      
  }
  render()
  {
    console.log(this.state);
    return (
      <Router>
      <div className="app">
        <Header/>
        <Route exact path="/demo" render={props =>(
          <React.Fragment>
            <PredictForm predict = {this.predict}/>
            <PredictionResult probability={this.state.probability} hour={this.state.hour}/>
          </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        
      </div>
      </Router>
    );
  }
    
  
}

export default App;
