import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PredictForm from './components/PredictForm';
import Header from './components/layout/Header';
import About from './components/pages/About'
import './App.css';
import axios from 'axios';

class App extends React.Component {
state ={
    chance: 0,
    hour: 0
  };

 
  predict = (hour) =>{
    
    // axios.get(`http://ml.edparko.com/api/predict.php?hour=${hour}`)
    //   .then(response => this.setState({ chance: response.chance, hour: response.hour }))
      axios.get(`http://ml.edparko.com/api/predict.php?hour=${hour}`)
      .then(response => console.log(response.data))
     console.log(this.state);
    
  }
  render()
  {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <PredictForm predict = {this.predict}/>
          </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        
      </div>
      </Router>
    );
  }
    
  
}

export default App;
