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
    <svg className="bi bi-house" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
     <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
     </svg>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي
    <svg className="bi bi-info-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
     <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
     <circle cx="8" cy="4.5" r="1"/>
</svg>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية
    <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
</svg>
    </Link></li>
    <li className="nav-item  p-2"> <button onClick={()=>close()} className="btn btn-dark">الخروج
    <svg className="bi bi-x-octagon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
</svg>
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
    <svg className="bi bi-house" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
     <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
     </svg>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/about">حول الملف الطبي
    <svg className="bi bi-info-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
     <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
     <circle cx="8" cy="4.5" r="1"/>
</svg>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/">تطبيق توعية
    <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
</svg>
    </Link></li>
    <li className="nav-item  p-2"><Link className="text-white h6 navbar-text" to="/medicalfile">
    ملف جديد
    <svg className="bi bi-folder-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
  </svg>
    </Link></li>
    <li className="nav-item p-2 text-center login-hoverlink">
    <button onClick={()=>hideshowlogin_menu()} className="text-white btn btn-dark h6 navbar-text login-topbar border-bottom-0" to="/userlogin">الدخول
    <svg className="bi bi-person-lines-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7 1.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm2 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
</svg>
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
  <a className="navbar-brand text-white"><img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
  الملف الطبي المرجعي
  <svg className="bi bi-layers" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z" clip-rule="evenodd"/>
</svg>
   </a>
   <div style={{marginLeft:"30%"}}>
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