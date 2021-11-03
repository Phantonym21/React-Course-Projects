import React, { Component } from "react"; // Importing Component class from React to use its methods in Counter class //imrc

class Counter extends React.Component {
  // Counter class is subclass of Component //cc
  state = {
    count: this.props.value,
  };
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.getState()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 15, fontWeight: "bold" }}
          className="btn-primary btn-sm"
          onClick={() => this.increase()}
        >
          Increment
        </button>
      </div>
    );
  }
  getState() {
    let stats = " m-3 p-2 badge ";
    stats += this.state.count === 0 ? "bg-warning" : "bg-primary";
    return stats;
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    // const { count } = this.state;
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter; // exporting Class counter in other line
