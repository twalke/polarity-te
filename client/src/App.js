import React, { Component } from 'react';
import './App.css';

import Nav from "./Nav";
import TodoService from "./TodoService";
import {Link, Route} from "react-router-dom";
import HobbiesList from "./HobbiesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        Enter your name and hobby here.
        <TodoService />
        <button><Link className="navButton" to={{pathname: `/hobbiesList`}}>Hobbies List</Link></button>
      </div>
    );
  }
}

export default App;
