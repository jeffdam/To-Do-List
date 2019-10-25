import React from 'react';
import ToDoItemForm from './todo_item_form';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {title: "Build a to-do list", done: false},
        {title: "Study for interview ", done: true},
      ]
    };
    this.addTask = this.addTask.bind(this);
  }


  componentDidMount() {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      this.setState({ list: parsedList});
    } 
  }

  addTask(task) {
    const updatedList = [...this.state.list, task];
    this.setState({ list: updatedList});
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  render() {
    const toDoList = this.state.list.map((item, idx) => {
      const checked = item.done ? "fa-check-square" : "fa-square";
      return (
        <li key={idx}>
          <div className="icons">
            <i className={`far ${checked}`}></i>
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