import React from 'react';
import Tabs from './tabs';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
   }

   componentWillUnmount() {
     clearInterval(this.timer);
   }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const folder = ['one', 'two', 'three'];
    return (
      <div>
        <h2>Clock</h2>
          <ul>
            <li>Hours: {this.state.date.getHours() % 12}</li>
            <li>Minutes: {this.state.date.getMinutes()}</li>
            <li>Seconds: {this.state.date.getSeconds()}</li>
          </ul>
          <h2>Date</h2>
          <ul>
            <li>{this.state.date.getFullYear()}</li>
            <li>{this.state.date.getMonth()}</li>
            <li>{this.state.date.getDay()}</li>
          </ul>
          <Tabs />
      </div>
    );
  }
}

export default Clock;
