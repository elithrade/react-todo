import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      }),
    });
  };

  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        title,
        completed: false,
      })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
  };

  rmTodo = id => {
    // Spread operation
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(t => t.id !== id)],
      }),
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    rmTodo={this.rmTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
