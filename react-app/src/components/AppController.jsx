import React, { Component } from "react";

import Navbar from "./navbar";
import Counters from "./counters_child";
// import Counters from "./counters";

class AppController extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ],
    search: ""
  };

  handleReset = () => {
    const res_arr = this.state.counters.filter(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: res_arr });
    console.log("Reset called!");
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

  handleSearch = search => {
    this.setState({ search: search });
    console.log("Search called!", search);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          total={this.state.counters.filter(c => c.value > 0).length}
          logo={this.props.logo}
          onSearch={this.handleSearch}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}            
            search={this.state.search}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default AppController;
