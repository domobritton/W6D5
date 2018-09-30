import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    const {names} = this.props;
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  render() {
    const header = this.matches().map((name, idx) => {
      return ( <div>
                <li
                  key={idx}
                  onClick={() => this.selectName}>
                  {name}
                </li>
              </div>
               );
    });

    return (
      <div className='autoDiv'>
        <h4>AutoComplete</h4>
        <form>
       <label>
         <input
            onChange={this.handleInput}
            type='text'
            value={this.state.inputVal}
            placeholder='Search...'/>
       </label>
       </form>
       <ul>{header}</ul>
      </div>
    );
  }
}

export default AutoComplete;
