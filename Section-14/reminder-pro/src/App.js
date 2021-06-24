import React from 'react';
import { v4 as uuidv4} from 'uuid';
import './App.css';
import Item from './components/Item';


export default class App extends React.Component {
  state = {
    id: '',
    todoInput: '',
    dateInput: '',
    curDate: new Date(),
    todoList: [],
    notification: ''
  }

  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleCreate = (todoInput, dateInput) => {
    if (this.state.todoInput === '') {
      this.setState({
        notification: 'missing todo!'
      })
    } else if (this.state.dateInput === '') {
      this.setState({
        notification: 'missing date!'
      })
    } else {
      this.setState({
        todoList: this.state.todoList.concat({
          id : uuidv4(),
          todoInput: todoInput,
          dateInput: dateInput
        }),
          todoInput: '',
          dateInput: '',
          notification: ''
      });
    }
  }

  handleDelete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.id !== id)
    })
  }
  
  render() {
  return (
    <div className="container">
      <div className="title">Reminder Pro</div>
      <div className="main-container">
        <input
          id='todo-input'
          type='text'
          name='todoInput'
          placeholder='I have to...'
          value={this.state.todoInput}
          onChange={this.handleChange}
        ></input>
        <input 
          id='date-input'
          type='date'
          name='dateInput'
          value={this.state.dateInput}
          onChange={this.handleChange}
        ></input>
        <button
          id='add-reminder'
          onClick={this.handleCreate.bind(this,this.state.todoInput, this.state.dateInput)}
        >Add reminder</button>
      </div>
      <div style={{color: "red"}}>{this.state.notification}</div>
      {this.state.todoList.map((listItem, index) => <Item id={listItem.id} todoInput={listItem.todoInput} dateInput={listItem.dateInput} handleDelete={this.handleDelete} key={index}/>)}
    </div>
  );
} 
}


