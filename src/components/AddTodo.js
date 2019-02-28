import React, {Component} from 'react';

class AddTodo extends Component {
  // Component level state
  state = {
    title: '',
  };

  onSubmit = e => {
    // Prevent submit to file
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    });
  };

  onChange = e =>
    this.setState({
      // e.target.name matches input field name
      [e.target.name]: e.target.value,
    });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
          style={{flex: '10', padding: '5px'}}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    );
  }
}

export default AddTodo;
