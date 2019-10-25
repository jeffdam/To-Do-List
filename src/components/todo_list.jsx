import React from 'react';
import ToDoItemForm from './todo_item_form';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}, 
      count: 0
    };
    this.addTask = this.addTask.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      this.setState(parsedList);
    } 
  }

  addTask(task) {
    const newList = Object.assign({}, this.state);
    newList.list[this.state.count] = task;
    newList.count = this.state.count + 1;
    this.updateList(newList);
  }

  editTask(taskId, task) {
    const newList = Object.assign({}, this.state);
    newList.list[taskId] = task;
    this.updateList(newList);
  }
  
  updateList(newList) {
    this.setState(newList);
    localStorage.setItem('list', JSON.stringify(newList));  
  }

  render() {
    console.log(this.state.list);
    const toDoList = Object.values(this.state.list).map((item, idx) => {
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