import React from 'react';
import Reminder from './components/Reminder';
import './App.css';

export default class App extends React.Component {
  state = {
    todovalue: '',
    datevalue: new Date(),
  }

  addReminder() {

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
        <br></br>
        {this.state.datevalue}
        <br></br>
        <Reminder startTime = {this.state.datevalue} />
      </div>
    </div>
  }
}

