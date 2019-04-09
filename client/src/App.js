import React, { Component } from 'react';
import './App.css';

import TodoService from "./TodoService";
import {Link, Route} from "react-router-dom";
import HobbiesList from "./HobbiesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Enter your name and hobby here.</h1>
        <TodoService />
        <Link className="Button" to={{pathname: `/hobbiesList`}}>View Hobbies List</Link>
      </div>
    );
  }
}

export default App;
