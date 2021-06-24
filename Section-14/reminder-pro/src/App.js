import React from 'react';
import './App.css';
import Item from './components/Item';


export default class App extends React.Component {
  state = {
    todoInput: '',
    dateInput: "0000-00-00",
    curDate: new Date(),
    todoList: [],
    notification: ''
  }

  

  changeTodoInput(event) {
    
      this.setState({
        todoInput: event.target.value
      });
    
  }

  changeDateInput(event) {
    this.setState({
      dateInput: event.target.value
    });
  }

  handleCreate(todoInput, dateInput) {
    if (this.state.todoInput === '') {
      this.setState({
        notification: 'missing todo!'
      })
    } else if (this.state.dateInput === '0000-00-00') {
      this.setState({
        notification: 'missing date!'
      })
    } else {
    this.setState({
      todoList: this.state.todoList.concat({
        todoInput: todoInput,
        dateInput: dateInput
      }),
        todoInput: '',
        dateInput: "0000-00-00",
        notification: ''
    });
  }
}

  // renderTodoList() {
  //   this.state.todoList.map(listItem => <Item todoInput={listItem.todoInput} dateInput={listItem.dateInput} key={listItem}/>)
  // }

  render() {
  return (
    <div className="container">
      <div className="title">Reminder Pro</div>
      <div className="main-container">
        <input id='todo-input' type='text' placeholder='I have to...' value={this.state.todoInput} onChange={(event) => this.changeTodoInput(event)}></input>
        <input id='date-input' type='date' value={this.state.dateInput} onChange={(event) => this.changeDateInput(event)}></input>
        <button id='add-reminder' onClick={this.handleCreate.bind(this,this.state.todoInput, this.state.dateInput)}>Add reminder</button>
      </div>
      <div style={{color: "red"}}>{this.state.notification}</div>
      {this.state.todoList.map((listItem, index) => <Item todoInput={listItem.todoInput} dateInput={listItem.dateInput} key={index}/>)}
    </div>
  );
} 
}


