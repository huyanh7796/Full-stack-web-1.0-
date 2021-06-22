import React from 'react';
import './Reminder.css';

export default class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_time: new Date(),
            nowtime: new Date(),
            timer: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    handleClick() {
        const state = this.state;
        state.start_time = new Date();
        state.now_time = new Date();
        if(!this.state.timer)
        state.timer = true;
        this.setState(state);
    }

    timer() {
        if(this.state.timer)
        this.setState({ now_time : new Date()});
    }

    renderReminderBox() {
        const getTimeDiff = (start_time, now_time) => {
            return Math.round((now_time.getTime() - start_time.getTime()) / 1000);
          };
    }

    render() {
        return 
        //   (<div>
        //     <p>{getTimeDiff(this.state.start_time, this.state.now_time)}</p>
        //     <Dimes handleClick={this.handleClick} timer={this.state.timer} />
        //   </div>)
        <div>
            {this.renderReminderBox()}
        </div>
      }    
}
