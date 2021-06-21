import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    todovalue: '',
    datevalue: 0,
  }
  
  addReminder(inputtodo, years) {
      return <div class="reminder-container">
           <div class="todo-container">
              <div class="to-do">${inputtodo}</div>
              <div class="day-count">in ${years} years</div>
          </div>
          <div class="closecheck-container">
              <span class="close" onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
              <input type="checkbox" class="check-box"></input>
          </div>
      </div>
  }

  render() {
    return <div className="container">
      <div class="title">Reminder Pro</div>
      <div className='input-container'>
            <input className='input-todo' type="text" placeholder="I have to..." value={this.state.todovalue} onChange={(event) => this.setState({todovalue: event.target.value})}></input>
            <input className='input-date' type="date" onChange={(event) => this.setState({datevalue: event.target.value})}/>
            <button className='reminder-button'onClick={this.addReminder(this.state.todovalue,this.state.datevalue)}>Add Remider</button>
      </div>
      <div>
        {this.state.todovalue}
        {this.state.datevalue}
      </div>
      <div className="reminder-container">

      </div>
    </div>
  }
}

