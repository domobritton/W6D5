import React from 'react';


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
    return (
      <h1>
      <ul>
      <li>Hours: {this.state.date.getHours() % 12}</li>
      <li>Minutes: {this.state.date.getMinutes()}</li>
      <li>Seconds: {this.state.date.getSeconds()}</li>
      </ul>
      </h1>
    );
  }
}

export default Clock;
