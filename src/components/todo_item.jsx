import React from 'react';
import ToDoForm from './todo_item_form';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  
  deleteTask() {
    return () => {
      this.props.modifyList("Delete", this.props.item);
    };
  }
  
  revealForm() {
    return () => {
      this.setState({edit: true});
    };
  }

  hideForm() {
    return () => {
      this.setState({edit: false});
    };
  }

  markDone() {
    return () => {
      const newTask = Object.assign({}, this.props.item);
      newTask.done = newTask.done ? false : true;
      this.props.modifyList("Edit", newTask);
    };
  }

  render() {
    const { item } = this.props;
    const checked = item.done ? "fa-check-square" : "fa-square";
    const showAsDone = item.done ? "done" : "";
    const hideForm = this.state.edit ? "" : "hide";
    return (
      <li className={`task-item ${showAsDone}`}>
        <div className="icons">
          <i className={`far ${checked}`} onClick={this.markDone()}></i>
          <i className="fas fa-edit" onClick={this.revealForm()}></i>
          <i className="fas fa-trash-alt" onClick={this.deleteTask()}></i>
        </div>
        {item.title}
        <div className={hideForm} >
          <div className="edit-form">
            <ToDoForm 
              formType="Edit" 
              modifyList={this.props.modifyList} 
              title={item.title} 
              taskId={item.id} 
              hideForm={this.hideForm()}
              />
            <button onClick={this.hideForm()}>Cancel</button>
          </div>
        </div>
      </li>
    )
  }
}

export default ToDoItem;