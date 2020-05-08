import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Medicalfile from './pages/medicalfile';
function App() {
    return (
      <div>
      <nav class="navbar navbar-light bg-dark justify-content-center">
      <span class="navbar-brand font-weight-bolder h-1 text-white">توعية</span>
      </nav>
      <br/>
      <div className="container bg-center">
       <Router>
       <switch>
       <Route path="/medicalfile" component={Medicalfile}/>
       </switch>
       </Router>
      </div>
      </div>
    );
}

export default App;