import React from 'react';
import Tabs from './tabs';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
   }

   componentWillUnmount() {
     clearInterval(this.timer);
   }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div className='clockDiv'>
        <p>The current time is:</p>
          <span>{hours % 12} : {minutes} : {seconds} PDT</span>
        <p>Today's date:</p>
          <span>{this.state.date.toDateString()}</span>
      </div>
    );
  }
}

export default Clock;
