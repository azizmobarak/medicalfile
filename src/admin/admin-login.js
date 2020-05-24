import React, { Component,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {doctoraction} from '../actions/doctoraction';
import {store} from '../index';
import { Redirect } from 'react-router-dom';


const Adminlogin=(props)=>  {
 
const Admin =useSelector(state=>state.Admin)
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
   

//login to doctors panel

//submit values
const submithandler=(e)=> {
    e.preventDefault();
      try{
              fetch('http://localhost:8000/api/sickers/admin/login',{
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
                             sessionStorage.setItem('admin',email);
                             alert(sessionStorage.getItem('admin'))
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
     return(<Redirect to="/"/>)
 }
else{
    return (
        <div>
        <div className="row">
         <div className="col-sm-3"></div>
         <div className="col-sm-5">
         <br/>
         <h2 className="text-center text-primary">Simpower Admin Panel</h2>
         <form onSubmit={submithandler} className="form w-100 py-sm-4 text-center login-color">
         <br/>
         <div className="text-danger">{err}</div>
         <br/>
            <div className="row w-100 py-lg-2">
            <div className="col-2 h3">
            <svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
            </div>
            <div className="col-10">
            <input type="text" name="email" value={email} onChange={onnchangemail}  className="form-control text-xl-right" placeholder="الايميل او رقم المستعمل"/>
            </div>
            </div>
            <br/>
            <div className="row w-100 py-lg-2">
            <div className="col-2 h3">
            <svg class="bi bi-lock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z" clip-rule="evenodd"/>
             </svg>
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

export default Adminlogin;