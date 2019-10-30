import React, { Component } from "react";
// import Counter from "./counter";
import Counter from "./counter_child";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const new_arr = [...this.state.counters]; //... clona el objeto
    const index = new_arr.indexOf(counter);
    new_arr[index].value++;
    this.setState({ counters: new_arr });
    console.log("Increment called!", counter.id);
  };

  handleDelete = id => {
    const new_arr = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: new_arr });
    console.log("Delete called!", id);
  };

  handleReset = () => {
    const res_arr = this.state.counters.filter(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: res_arr });
    console.log("Reset called!");
  };

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
