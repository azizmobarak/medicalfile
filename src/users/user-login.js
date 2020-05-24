import React,{useState} from 'react';
import {Redirect, Link} from 'react-router-dom';

const Userlogin =()=>{

const [email,setemail]= useState("");
const [password,setpassword]= useState("");
const [err,seterr]= useState("");

//get values
const changehandleremail=e=>{
    setemail(e.target.value);
}
const changehandlerpassword=e=>{
    setpassword(e.target.value);
}

//submit values
const submithandler=(e)=> {
   e.preventDefault();
     try{
             fetch('http://localhost:8000/api/sickers/user/login/',{
                      method:'post',
                      headers:{
                             'Accept': 'application/json',
                              'Content-Type': 'application/json',
                               },
                         body:JSON.stringify({
                                     password:password,
                                     email:email
                                            })
                               })
                                  .then(response => 
                                    {
                            response.json().then(data => 
                                {
                               if(data.success=="true")
                                {
                            sessionStorage.setItem('ID',data.ID);
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

if(sessionStorage.getItem('ID')!=null)
{
    //sessionStorage.removeItem('ID')
    return (<Redirect to="/main"/>)
}
else{
    return(
        <div className="row">
        <div className="col-sm-8 px-xl-5 text-center">
        <br/>
        <div className="h2">تسجيل الدخول</div>
        <br/>
        <div className="text-danger">{err}</div>
        <form onSubmit={submithandler} className="form w-100 py-sm-4 login-color">
        <div className="row w-100 py-lg-2">
        <div className="col-2 h3">
        <i className="fas fa-user"></i>
        </div>
        <div className="col-10">
        <input type="text" name="email" value={email} onChange={changehandleremail} className="form-control text-right" placeholder="الايميل او رقم المستعمل"/>
        </div>
        </div>
        <br/>
        <div className="row w-100 py-lg-2">
        <div className="col-2 h3">
       <i className="fas fa-lock"></i>
        </div>
        <div className="col-10">
        <input type="password" name="password" value={password} onChange={changehandlerpassword} className="form-control text-right" placeholder="كلمة السر"/>
        </div>
        </div>
        <br/>
        <div>
        <Link to="/searchlogin">دخول اسثنائي</Link>
        </div>
        <br/>
        <div className="w-100 py-lg-1">
        <button type="submit" className="btn btn-outline-success px-xl-5">الدخول</button>
        </div>
        </form>
        <br/>
        </div>
        <br/>
        <br/>
        <div className="col-sm-4 text-center text-white">
        <div className="card bg-dark">
        <h3>هام</h3>
        </div>
        <br/>
        <div className="card bg-danger">
        <h3>هام</h3>
        </div>
        <br/>
        </div>
        </div>
    )}
}


export default Userlogin;