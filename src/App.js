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
      <li className="nav-item  p-2 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4" to="/">
      <div>
      الرئيسية <i className="fas fa-home"></i>
      </div>
    </Link></li>
    <li className="nav-item  p-2 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4" to="/about">
    <div>
    حول الملف الطبي <i className="fas fa-file-medical"></i>
    </div> 
    </Link></li>
    <li className="nav-item  p-2 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4" to="/">
    <div>
    تطبيق توعية <i className="fas fa-mobile"></i>
    </div>
    </Link></li>
    <li className="nav-item  p-2 nav-text-hover"> <button onClick={()=>close()} className="btn btn-dark">
    <i className="fas fa-power-off"></i>
    </button></li>
    <li id="small-login-menu"></li>
    </ul>
    )


  const casetwo=
    (
      <ul className="nav">
    <li className="nav-item  py-3 nav-text-hover"><Link className="text-decoration-none h6 navbar-text py-2 px-4 " to="/">
     <div>الرئيسية <i className="fas fa-home"></i></div>
    </Link></li>
    <li className="nav-item  py-3 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4 " to="/about">  
    <div>
    حول الملف الطبي <i className="fas fa-file-medical"></i>
    </div>
    </Link></li>
    <li className="nav-item  py-3 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4" to="/">
    <div>
    تطبيق توعية  <i className="fas fa-mobile"></i>
    </div>
    </Link></li>
    <li className="nav-item  py-3 nav-text-hover"><Link className="text-decoration-none h6 navbar-text  py-2 px-4" to="/medicalfile">
    <div>
    ملف جديد  <i className="fas fa-folder-plus"></i>
    </div>
    </Link></li>
    <li className="nav-item p-3 text-center login-hoverlink text-decoration-none nav-text-hover ">
    <button onClick={()=>hideshowlogin_menu()} className="text-decoration-none btn btn-dark h6 navbar-text login-topbar border-bottom-0 " to="/userlogin">الدخول
    <i className="fas fa-unlock-alt"></i>
    </button>
    <ul id="small-login-menu" className="nav position-absolute bg-dark text-white border-bottom text-center" style={{zIndex:"1",display:"none"}}>
    <li><br/><Link className="text-white px-2" to="/userlogin">المعطيات الشخصية</Link></li>
    <br/>
    <li><Link className="text-white px-2" to="/searchlogin"> تصفح البيانات</Link></li>
    <br/>
    </ul>
    </li>
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
    
    window.onscroll=()=>{
    let navbar = document.getElementById('navbar');
    if(window.pageYOffset>30)
    {
      navbar.classList.add('secondnavbarcolor');
    }
    else{
      navbar.classList.remove('secondnavbarcolor');
    }
    }

    return (
      <div>
      <Router>
  <nav id='navbar' className="navbar navbar-expand-lg bg-gray justify-content-between">
  <a className="navbar-brand text-dark h1" href="/">
  <div className="font-weight-bolder px-3">
  الملف الطبي  <i className="fas fa-file-medical-alt"></i>
  </div>
   </a>
   <div style={{marginLeft:"30%"}}>
   <p></p>
   </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-list"></i>
    </button>
    <div className="collapse navbar-collapse w-100 text-xl-right" id="navbarSupportedContent">
    {sessionStorage.getItem('ID')==null ? casetwo : caseone}
    </div>
    </nav>
      <div className="container bg-center">
      <br/>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/adminpanel" component={adminpanel} />
       <Route path="/medicalfile" component={Medicalfile}/>
       <Route path="/userlogin" component={Userlogin}/>
       <Route path="/main" component={Usermain}/>
       <Route path="/searchlogin" component={Login} />
       <Route path="/searchpanel" component={Mainpanel}/>
       <Route path="/test" component={example} />
       <Route path="/admin" component={adminlogin} />
       </Switch>
       </div>
       </Router>
      </div>
    );
}

export default App;