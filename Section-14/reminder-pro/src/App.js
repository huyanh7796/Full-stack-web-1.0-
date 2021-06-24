import React from 'react';
import './App.css';
import Item from './components/Item';


export default class App extends React.Component {
  state = {
    todoInput: '',
    dateInput: "1996-07-07",
    curDate: new Date(),
    todoList: []
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

  // daysBetween (dateInput, curDate) {
  //   let oneDay = 1000 * 60 * 60 *24;
  //   console.log(Math.ceil((dateInput - curDate)/oneDay));
  //   return Math.ceil((dateInput - curDate)/oneDay)
  // }
  handleCreate(todoInput, dateInput) {
    this.setState({
      todoList: this.state.todoList.concat({
        todoInput: todoInput,
        dateInput: dateInput
      }),
        todoInput: '',
    });
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
      {this.state.todoList.map((listItem, index) => <Item todoInput={listItem.todoInput} dateInput={listItem.dateInput} key={index}/>)}
    </div>
  );
} 
}


