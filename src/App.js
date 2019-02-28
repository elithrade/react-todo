import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
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
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  rmTodo = id => {
    this.setState({
      // Spread operation
      todos: [...this.state.todos.filter(t => t.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            rmTodo={this.rmTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
