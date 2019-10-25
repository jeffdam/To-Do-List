import React from 'react';

class ToDoItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      done: false
    };
  }

  handleUpdate() {
    return (e) => {
      this.setState({title: e.target.value});
    };
  }

  handleSubmit() {
    return () => {
      this.props.addTask(this.state);
    };
  }

  render() {
    return (
      <section>
        <h2>Add To-Do Item</h2>
        <form>
          <label>New Task
            <input type="text" onChange={this.handleUpdate()}/>
          </label>
          <button type="submit" onClick={this.handleSubmit()}>Add Task</button>
        </form>
      </section>
    )
  }
}

export default ToDoItemForm;