import React, { Component } from 'react';
import axios from "axios";

import {Link} from "react-router-dom";

class HobbiesList extends Component {
  constructor() {
  super();
  this.state = {
    hobbies: [],
    loading: true,
    errMsg: null
  }
}

  getHobbies() {
    axios.get("http://localhost:8081/hobbiesList")
    .then(response => this.setState({
      hobbies: response.data,
      loading: false,
      errMsg: null
    }))
    .catch (err => this.setState({
      loading: false,
      errMsg: "data unavailable"
    }))
  }

  componentDidMount() {
    this.getHobbies();
  }

  render() {
    if(this.state.hobbies)
    return (
      <div className = "HobbiesList">
        <h1 className="title">Hobbies List</h1>
        <div className="nameCol">
          <h3>Name</h3>
          <div>{this.state.hobbies.map((hobbies) => <div key={hobbies._id}> {hobbies.name} </div>)}</div>
        </div>
        <div className="hobbyCol">
          <h3>Hobby</h3>
          <div>{this.state.hobbies.map((hobbies) => <div key={hobbies._id}> {hobbies.hobby} </div>)}</div>
        </div>
        <Link className="Button" id="backButton" to={{pathname: `/`}}>Back</Link>
      </div>
    );
  }
}

export default HobbiesList;
