import React from 'react';
import ToDoForm from './todo_item_form';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  handleEdit() {
    return () => {
      this.setState({edit: true});
    };
  }

  deleteTask() {
    return () => {
      this.props.modifyList("Delete", this.props.item);
    };
  }

  hideForm() {
    return () => {
      this.setState({edit: false});
    };
  }

  render() {
    const { item } = this.props;
    const checked = item.done ? "fa-check-square" : "fa-square";
    const hideForm = this.state.edit ? "" : "hide";
    return (
      <li>
        <div className="icons">
          <i className={`far ${checked}`}></i>
          <i className="fas fa-edit" onClick={this.handleEdit()}></i>
          <i className="fas fa-trash-alt" onClick={this.deleteTask()}></i>
        </div>
        {item.title}
        <div className={hideForm}>
          <ToDoForm formType="Edit" modifyList={this.props.modifyList} title={item.title} taskId={item.id} hideForm={this.hideForm()}/>
        </div>
      </li>
    )
  }
}

export default ToDoItem;