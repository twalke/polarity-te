import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className = "Nav">
        <button><Link className="navButton" to={{pathname: `/hobbiesList`}}>Hobbies List</Link></button>
      </div>
    );
  }
}

export default Nav;
