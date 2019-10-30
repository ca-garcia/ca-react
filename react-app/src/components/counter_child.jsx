import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()} style={this.styles}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-sm btn-success"
            style={{ fontSize: 16 }}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
          <br />
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
