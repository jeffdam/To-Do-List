import React from 'react';

class ToDoItem extends React.Component {


  render() {
    const { item } = this.props;
    const checked = item.done ? "fa-check-square" : "fa-square";
    return (
      <li>
        <div className="icons">
          <i className={`far ${checked}`}></i>
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
        </div>
        {item.title}
      </li>
    )
  }
}

export default ToDoItem;