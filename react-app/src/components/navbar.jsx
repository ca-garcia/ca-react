import React, { Component } from "react";

//Stateless Functional Component
// const Navbar = props => {
//   return (
//     <div id="nav">
//       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//         <a className="navbar-brand" href="/">
//           <img src={props.logo} width="30" height="30" alt="Logo" />
//           Navbar
//           <span className="badge badge-pill badge-primary m-1">
//             {props.total}
//           </span>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link disabled"
//                 href="#"
//                 tabIndex="-1"
//                 aria-disabled="true"
//               >
//                 Disabled
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown link
//               </a>
//               <div
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => props.onSearch}
//                 >
//                   Action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </div>
//             </li>
//           </ul>

//           <button
//             className="btn btn-danger btn-sm m-2"
//             onClick={() => props.onSearch}
//           >
//             Test
//           </button>

//           <div className="nav navbar-nav navbar-right">
//             <form className="form-inline">
//               <input
//                 className="form-control mr-sm-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button
//                 className="btn btn-outline-success my-2 my-sm-0"
//                 type="button"
//                 onClick={() => props.onSearch}
//               >
//                 Search
//               </button>
//             </form>
//           </div>

//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#">
//                 <span className="glyphicon glyphicon-user"></span> Sign Up
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <span className="glyphicon glyphicon-log-in"></span> Login
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

class Navbar extends Component {
  state = {
    search: ""
  };

  // updateInput(event) {
  updateInput = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit() {
    console.log("Your input value is: " + this.state.search);
    //Send state to the server code
  }

  render() {
    //Destructuring arguments
    const { logo, total, onSearch } = this.props;
    return (
      <div id="nav">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt="Logo" />
            Navbar
            <span className="badge badge-pill badge-primary m-1">{total}</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>

            {/* <button className="btn btn-danger btn-sm m-2" onClick={onSearch}>
              Test
            </button> */}

            <div className="nav navbar-nav navbar-right">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.updateInput}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                  onClick={() => onSearch(this.state.search)}
                >
                  Search
                </button>
              </form>
            </div>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
