import React from 'react';
import ToDoItemForm from './todo_item_form';
import ToDoItem from './todo_item';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}, 
      count: 0
    };
    this.modifyList = this.modifyList.bind(this);
  }

  componentDidMount() {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      this.setState(parsedList);
    } 
  }
  
  modifyList(type, task) {
    const newList = Object.assign({}, this.state);
    if (type === "Add") {
      task.id = this.state.count;
      newList.list[task.id] = task;
      newList.count = this.state.count + 1;
    } else if (type === "Edit") {
      newList.list[task.id] = task;
    } else {
      delete newList.list[task.id];
    }
    this.setState(newList);
    localStorage.setItem('list', JSON.stringify(newList));  
  }

  render() {
    const toDoList = Object.values(this.state.list).map((item, idx) => {
      return (
        <ToDoItem key={idx} item={item}/>
      )
    });
    
    return (
      <main>
        <h1>To-Do List</h1>
        <ul className="todo-list">
          { toDoList }
        </ul>
        <ToDoItemForm formType="Add" modifyList={this.modifyList} />
      </main>
    )
  }


}

export default ToDoList;