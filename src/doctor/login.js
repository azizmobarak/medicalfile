import React, { Component,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {doctoraction} from '../actions/doctoraction';
import {store} from '../index';
const Login=(props)=>  {
 
const doctor =useSelector(state=>state.Doctor)
const dispatcher = useDispatch();

const [email,setemail]=useState('');
const [pass,setpass]=useState('');

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

    return (
        <div>
        <div className="row">
         <div className="col-sm-3"></div>
         <div className="col-sm-5">
         <h2 className="text-xl-center text-primary">لوحة التحكم</h2>
         <br/>
         <form onSubmit={event} className="form w-100 py-sm-4">
            <div className="w-100 py-lg-2">
            <input type="text" name="email" value={email} onChange={onnchangemail}  className="form-control text-xl-right" placeholder="الايميل او رقم المستعمل"/>
            </div>
            <div className="w-100 py-lg-2">
            <input type="password" name="pass" value={pass} onChange={onnchangepass}  className="form-control text-xl-right" placeholder="كلمة السر"/>
            </div>
            <div className="w-100 py-lg-1 text-xl-center">
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

export default Login;