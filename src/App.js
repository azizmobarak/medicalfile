import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';
import Medicalfile from './pages/medicalfile';
function App() {
    return (
      <div>
      <nav className="navbar navbar-light bg-dark justify-content-center">
      <span className="navbar-brand font-weight-bolder h-1 text-white">توعية</span>
      </nav>
      <Router>
       <Switch>
       <Route exact path="/" component={Home}/>
      <div className="container bg-center">
      <br/>
       <Route path="/medicalfile" component={Medicalfile}/>
      </div>
      </Switch>
       </Router>
      </div>
    );
}

export default App;