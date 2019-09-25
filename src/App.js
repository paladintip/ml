import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import PredictionForm from './components/PredictionForm';
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
            <PredictionForm predict = {this.predict}/>
            <PredictionResult probability={this.state.probability} hour={this.state.hour}/>
          </React.Fragment>
        )}/>
          <Route path="/about" component={About}/>
          <Route exact path="/" render={props =>(
          <React.Fragment>
            <h2 class='home-desc'>A little machine learning model for predicting the best time to work.</h2>
            <NavLink activeClassName='active' className='startBtn' to="/demo">Try it!</NavLink>
          </React.Fragment>
        )}/>
      </div>
      </Router>
    );
  }
    
  
}

export default App;
