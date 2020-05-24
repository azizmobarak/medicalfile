import React, { Component,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {doctoraction} from '../actions/doctoraction';
import {store} from '../index';
import { Redirect } from 'react-router-dom';


const Login=(props)=>  {
 
const doctor =useSelector(state=>state.Doctor)
const dispatcher = useDispatch();

const [email,setemail]=useState('');
const [pass,setpass]=useState('');
const [err,seterr]=useState('');

const onnchangemail=(e)=>{
setemail(e.target.value); 
}
const onnchangepass=(e)=>{
setpass(e.target.value);  
    }
   
const event=(e)=>{
    e.preventDefault();
    dispatcher(doctoraction('mail','123'))
    console.log(doctor)
}

//login to doctors panel

//submit values
const submithandler=(e)=> {
    e.preventDefault();
      try{
              fetch('http://localhost:8000/api/sickers/doctor/login/',{
                       method:'post',
                       headers:{
                              'Accept': 'application/json',
                               'Content-Type': 'application/json',
                                },
                          body:JSON.stringify({
                                      password:pass,
                                      email:email
                                             })
                                })
                                   .then(response => 
                                     {
                             response.json().then(data => 
                                 {
                              
                                if(data.success=="true")
                                 {
                             sessionStorage.setItem('doctor',data.token);
                             window.location.reload();
                             seterr("");
                                  }
                         else
                                  {
                                   seterr("المعلومات غير صحيحة");
                                  }
                              });
                           });
                  }
                  catch(e)
                  {
                    console.log(e)
                  }
 }
 
 if(sessionStorage.getItem('doctor')!==null)
 {
     return(<Redirect to="/searchpanel"/>)
 }
else{
    return (
        <div>
        <div className="row">
         <div className="col-sm-3"></div>
         <div className="col-sm-5">
         <br/>
         <h2 className="text-center text-primary">لوحة التحكم</h2>
         <form onSubmit={submithandler} className="form w-100 py-sm-4 text-center login-color">
         <br/>
         <div className="text-danger">{err}</div>
         <br/>
            <div className="row w-100 py-lg-2">
            <div className="col-2 h3">
            <i className="fas fa-user"></i>
            </div>
            <div className="col-10">
            <input type="text" name="email" value={email} onChange={onnchangemail}  className="form-control text-xl-right" placeholder="الايميل او رقم المستعمل"/>
            </div>
            </div>
            <br/>
            <div className="row w-100 py-lg-2">
            <div className="col-2 h3">
            <i className="fas fa-lock"></i>
            </div>
            <div className="col-10">
            <input type="password" name="pass" value={pass} onChange={onnchangepass}  className="form-control text-xl-right" placeholder="كلمة السر"/>
            </div>
            </div>
            <br/>
            <div className="w-100 py-lg-1 text-center">
            <button type="submit" className="btn btn-outline-success px-xl-5">الدخول</button>
            </div>
            </form>
         </div>
         <div className="col-sm-4"></div>    
        </div>
        <br/><br/>
        </div>
    )
  }
}

export default Login;