import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import HobbiesList from "./HobbiesList";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App}/>
    <Route path='/hobbiesList' component={HobbiesList}/>
  </BrowserRouter>,

document.getElementById('root'));

serviceWorker.unregister();
