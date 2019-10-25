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

  handleSubmit(e) {
    return (e) => {
      e.preventDefault();
      this.props.addTask(this.state);
      this.setState({
        title: "",
        done: false
      });
    };
  }

  render() {
    return (
      <section>
        <h2>Add To-Do Item</h2>
        <form>
          <label>New Task
            <input 
              type="text" 
              onChange={this.handleUpdate()}
              value={this.state.title}  
            />
          </label>
          <button type="submit" onClick={this.handleSubmit()}>Add Task</button>
        </form>
      </section>
    )
  }
}

export default ToDoItemForm;