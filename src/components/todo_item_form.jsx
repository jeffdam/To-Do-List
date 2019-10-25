import React from 'react';

class ToDoItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.taskId,
      title: "",
      done: false,
      edit: false
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
      this.props.modifyList(this.props.formType, this.state);
      this.setState({
        id: this.props.taskId + 1,
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