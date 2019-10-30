import React, { Component } from "react";

// import Counter from "./counter";
import Counter from "./counter_child";

class Counters extends Component {
  is_Search = search => {
    if (search) {
      return (
        <div className="alert alert-info" role="alert">
          Welcome {search}!
        </div>
      );
    }
    return;
  };

  render() {
    //Destructuring arguments
    const { counters, onReset, onIncrement, onDelete, search } = this.props;
    return (
      <div>
        <h1>Hello React!</h1>
        {/* <h4>Welcome {search}!</h4> */
        this.is_Search(search)}
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
