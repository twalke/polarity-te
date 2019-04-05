import React, { Component } from 'react';

import {Link} from "react-router-dom";

class HobbiesList extends Component {
  render() {
    return (
      <div className = "HobbiesList">
        Hobbies List
        <button><Link className="navButton" to={{pathname: `/`}}>Back</Link></button>
      </div>
    );
  }
}

export default HobbiesList;
