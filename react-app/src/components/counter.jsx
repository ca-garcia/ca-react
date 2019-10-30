import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // count: this.props.value
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  constructor(props) {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.state.count = props.counter.value;
  }

  //handleIncrment = () => {
  handleIncrement(product) {
    this.setState({ count: (this.state.count += 1) });
    //console.log("Increment clicked!", this);
    console.log(product);
  }

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()} style={this.styles}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement("Product 1")}
            className="btn btn-sm btn-success"
            style={{ fontSize: 16 }}
          >
            Test
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
          {
            //this.renderTags()
          }
          <br />
        </div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
