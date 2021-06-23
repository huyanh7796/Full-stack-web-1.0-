import React from 'react';
import './Item.css';

export default class Item extends React.Component {
    render() {
        return <div className="reminder-container">
            <div className="todo-container">
                <div className="to-do">{this.props.todoInput}</div>
                <div className="day-count">{this.props.dateInput}</div>
            </div>
            <div className="closecheck-container">
                <span className="close">x</span>
                <input className="check-box" type="checkbox"></input>
            </div>
        </div>
    }
}