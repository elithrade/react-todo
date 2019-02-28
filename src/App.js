import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  };

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
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  rmTodo = id => {
    this.setState({
      // Spread operation
      todos: [...this.state.todos.filter(t => t.id !== id)],
    });
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
