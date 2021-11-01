import React, { Component } from "react"; // Importing Component class from React to use its methods in Counter class //imrc

class Counter extends React.Component {
  state = {
    count: 0,
  };
  // Counter class is subclass of Component //cc
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()} </span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <button>Buuger</button>;
  }
}

export default Counter; // exporting Class counter in other line
