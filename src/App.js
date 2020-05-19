import React from 'react';
import './App.css';
import center from './methods/centerState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';
import Medicalfile from './pages/medicalfile';
import Userlogin from './pages/user-login';
import Usermain from './pages/user-main';

function App() {
    return (
      <div>
   <nav className="navbar navbar-light bg-dark">
   <a className="navbar-brand text-white " href="#">
   <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
  الملف الطبي المرجعي
   </a>
     <ul className="nav">
     <li className="nav-item  p-2"><a className="text-white h6 navbar-text" href="#">الرئيسية</a></li>
     <li className="nav-item  p-2"><a className="text-white h6 navbar-text" href="#">حول الملف الطبي</a></li>
     <li className="nav-item  p-2"><a className="text-white h6 navbar-text" href="#">تطبيق توعية</a></li>
     </ul>
    </nav>
      <Router>
       <Switch>
       <Route exact path="/" component={Home}/>
      <div className="container bg-center">
      <br/>
       <Route path="/medicalfile" component={Medicalfile}/>
       <Route path="/userlogin" component={Userlogin}/>
       <Route path="/main" component={Usermain}/>
       <Route path="/test" component={center}/>
      </div>
      </Switch>
       </Router>
      </div>
    );
}

export default App;