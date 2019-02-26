import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: 3,
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

  rmTodo = id => {
    this.setState({
      // Spread operation
      todos: [...this.state.todos.filter(t => t.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          rmTodo={this.rmTodo}
        />
      </div>
    );
  }
}

export default App;
