import React from 'react';

class ToDoItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.taskId,
      title: this.props.title,
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
      if (this.props.formType === "Edit") {
        this.props.hideForm();
      }
      this.setState({
        id: this.props.taskId,
        title: "",
        done: false
      });
    };
  }

  render() {
    return (
      <section>
        <form>
          <label>{`${this.props.formType} Task`}
            <input 
              type="text" 
              onChange={this.handleUpdate()}
              value={this.state.title}  
            />
          </label>
          <button type="submit" onClick={this.handleSubmit()}>{`${this.props.formType} Task`}</button>
        </form>
      </section>
    )
  }
}

export default ToDoItemForm;