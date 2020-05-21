import React,{useState} from 'react';
import './App.css';
import Login from './doctor/login';
import Mainpanel from './doctor/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './pages/home';
import Medicalfile from './pages/medicalfile';
import Userlogin from './pages/user-login';
import Usermain from './pages/user-main';

function App() {

  const [user,setuser] = useState({ID:"",Email:"",Fullname:"",Chronic:"",Allergic:"",Blod:""});
  const [doctor,setdoctor]=useState({user:"email from app.js"});
  const [admin , setadmin]=useState({user:""});
  const [userpanel,setuserpanel] = useState({ID:"",Email:"",Fullname:"",Chronic:"",Allergic:"",Blod:""});
   const [test,settest]=useState("for test")

 const close=()=>{
    sessionStorage.removeItem('ID');
    window.location.reload();
   }

  const caseone=(
      <ul className="nav">
      <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">الرئيسية</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية</Link></li>
    <li className="nav-item  p-2"> <button onClick={()=>close()} className="btn btn-dark">الخروج</button></li>
    </ul>
    )
 

  const casetwo=
    (
      <ul className="nav">
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">الرئيسية</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/medicalfile">انشاء ملف جديد</Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/userlogin">الدخول</Link></li>
    </ul>
    )

    return (
      <div>
      <Router>
   <nav className="navbar navbar-light bg-dark">
   <a className="navbar-brand text-white " href="#">
   <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
  الملف الطبي المرجعي
   </a>
     {sessionStorage.getItem('ID')==null ? casetwo : caseone}
    </nav>
      
       <Switch>
       <Route exact path="/" component={Home}/>
      <div className="container bg-center">
      <br/>
       <Route path="/medicalfile" component={Medicalfile}/>
       <Route path="/userlogin" component={Userlogin}/>
       <Route path="/main" component={Usermain} user={user}/>
       <Route path="/searchlogin" component={Login} doctor={doctor}/>
       <Route path="/searchpanel" component={Mainpanel} user={userpanel}/>
      </div>
      </Switch>
       </Router>
      </div>
    );
}

export default App;