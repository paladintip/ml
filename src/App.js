import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import PredictForm from './components/PredictForm';
import Header from './components/layout/Header';
import About from './components/pages/About'
import uuid from 'uuid'
import './App.css';
import axios from 'axios';

class App extends React.Component {
state ={
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({todos:response.data}))
   
  }
  toggleComplete = (id) => (
    this.setState({todos: this.state.todos.map(todo =>{
        if(todo.id === id)
        {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
    
  );
  deleteTodo = (id) => (
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id) ]
    })
    
  );
  predict = (hour) =>{
    
    // axios.get(`http://ml.edparko.com/api/ml-predict.php?hour=${hour}`)
    //   .then(response => this.setState({ chance: response.chance, hour: response.hour }))
      axios.get(`http://ml.edparko.com/api/ml-predict.php?hour=${hour}`)
      .then(response => console.log(response))
     console.log(this.state);
    
  }
  render()
  {
    console.log(this.state.todos);
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <PredictForm predict = {this.predict}/>
            <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} toggleComplete={this.toggleComplete}/>
          </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        
      </div>
      </Router>
    );
  }
    
  
}

export default App;
