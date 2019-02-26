import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(t => (
      <TodoItem
        key={t.id}
        todo={t}
        markComplete={this.props.markComplete}
        rmTodo={this.props.rmTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
