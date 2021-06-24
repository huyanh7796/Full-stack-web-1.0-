import React from 'react';
import moment from 'moment';
import './Item.css';

export default class Item extends React.Component {
    state = {
        curDate : new Date()
    }
    
    handleDelete(event) {

    }

    daysBetween = (dateInput) => {
        if (moment(dateInput).diff(moment(this.state.curDate), 'second') > 0) {
            return moment(dateInput).fromNow()
        } else {
            return <div style={{color: "red"}}>Time's up</div>
        }
    }
    
    render() {
        return <div className="reminder-container">
            <div className="todo-container">
                <div className="to-do">{this.props.todoInput}</div>
                <div className="day-count">{this.daysBetween(this.props.dateInput)}</div>
            </div>
            <div className="closecheck-container">
                <span className="close" onClick={(event) => this.handleDelete(event)}>x</span>
                <input className="check-box" type="checkbox"></input>
            </div>
        </div>
    }
}