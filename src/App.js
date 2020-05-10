import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Api from './pages/testapi';
import Medicalfile from './pages/medicalfile';
function App() {
    return (
      <div>
      <nav className="navbar navbar-light bg-dark justify-content-center">
      <span className="navbar-brand font-weight-bolder h-1 text-white">توعية</span>
      </nav>
      <br/>
      <div className="container bg-center">
       <Router>
       <Switch>
       <Route path="/medicalfile" component={Medicalfile}/>
       <Route path="/api" component={Api}/>
       </Switch>
       </Router>
      </div>
      </div>
    );
}

export default App;