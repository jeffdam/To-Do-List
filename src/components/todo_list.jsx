import React from 'react';
import ToDoItemForm from './todo_item_form';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {title: "Build a to-do list", done: false},
        {title: "Study for interview ", done: false},
      ]
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({list: this.state.list.push(task)});
  }

  render() {
    debugger
    const toDoList = this.state.list.map((item, idx) => {
      return (
        <li key={idx}>
          <div className="icons">
            <i className="far fa-square"></i>
            <i className="far fa-check-square"></i>
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
          {item.title} 
        </li>
      )
    });
    
    return (
      <main>
        <h1>To-Do List</h1>
        <ul className="todo-list">
          { toDoList }
        </ul>
        <ToDoItemForm addTask={this.addTask}/>
      </main>
    )
  }


}

export default ToDoList;