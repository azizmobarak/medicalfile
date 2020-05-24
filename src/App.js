import React,{useState} from 'react';
import './App.css';
import Login from './doctor/login';
import Mainpanel from './doctor/main';
import example from './test';
import adminlogin from './admin/admin-login';
import adminpanel from './admin/admin-main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './home/home';
import Medicalfile from './users/medicalfile';
import Userlogin from './users/user-login';
import Usermain from './users/user-main';

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
      <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">الرئيسية
      <i className="fas fa-home"></i>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي
     <i className="fas fa-file-medical"></i>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية
    <i className="fas fa-mobile"></i>
    </Link></li>
    <li className="nav-item  p-2"> <button onClick={()=>close()} className="btn btn-dark">الخروج
    <i className="fas fa-user-lock"></i>
    </button></li>
    <li id="small-login-menu"></li>
    </ul>
    )

const hideshowlogin_menu=()=>{
  if(document.getElementById('small-login-menu').style.display==="block")
  {
    document.getElementById('small-login-menu').style.display="none"
  }else{
    document.getElementById('small-login-menu').style.display="block"
  }
}

try{document.addEventListener('click',()=>{
  document.getElementById('small-login-menu').style.display="none"
});}catch{}


  const casetwo=
    (
      <ul className="nav">
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">الرئيسية
    <i className="fas fa-home"></i>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي  
    <i className="fas fa-file-medical"></i>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية
    <i className="fas fa-mobile"></i>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/medicalfile">
    ملف جديد
    <i className="fas fa-folder-plus"></i>
    </Link></li>
    <li className="nav-item p-2 text-center login-hoverlink">
    <button onClick={()=>hideshowlogin_menu()} className="text-white btn btn-dark h6 navbar-text login-topbar border-bottom-0" to="/userlogin">الدخول
    <i className="fas fa-unlock-alt"></i>
    </button>
    <ul id="small-login-menu" className="nav position-absolute bg-dark text-white border-bottom text-center" style={{zIndex:"1",display:"none"}}>
    <li><br/><Link className="text-white px-4" to="/userlogin">المعطيات الشخصية</Link></li>
    <br/>
    <li><Link className="text-white px-4" to="/searchlogin"> تصفح البيانات</Link></li>
    <br/>
    </ul>
    </li>
    </ul>
    )

    return (
      <div>
      <Router>
  <nav className="navbar navbar-expand-lg bg-dark justify-content-between">
  <a className="navbar-brand text-white" href="/">
  الملف الطبي 
  <i className="fas fa-file-medical-alt"></i>
   </a>
   <div style={{marginLeft:"40%"}}>
   <p></p>
   </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg color="white" className="bi bi-grid-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clip-rule="evenodd"/>
    </svg>
    </button>
    <div className="collapse navbar-collapse w-100 text-xl-right" id="navbarSupportedContent">
    {sessionStorage.getItem('ID')==null ? casetwo : caseone}
    </div>
    </nav>
      
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/adminpanel" component={adminpanel} />
      <div className="container bg-center">
      <br/>
       <Route path="/medicalfile" component={Medicalfile}/>
       <Route path="/userlogin" component={Userlogin}/>
       <Route path="/main" component={Usermain} user={user}/>
       <Route path="/searchlogin" component={Login} doctor={doctor}/>
       <Route path="/searchpanel" component={Mainpanel} user={userpanel}/>
       <Route path="/test" component={example} />
       <Route path="/admin" component={adminlogin} />
      </div>
      </Switch>
       </Router>
      </div>
    );
}

export default App;