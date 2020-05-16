import React from 'react';
import postData from '../methods/postdata';
import axios from 'axios';

export default class Userlogin extends React.Component{

constructor(props){
    super(props);
    this.state={
     email :"",
     password :"",
     err:"",
     data:[]
    }
    this.submithandler=this.submithandler.bind(this);
    this.changehandler=this.changehandler.bind(this);
}
//get values
changehandler=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

//submit values
async submithandler(e) {
    e.preventDefault();
   try{
   await fetch('http://localhost:8000/api/sickers/user/login/',{
     method:'post',
     headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     },
     body:JSON.stringify({
           password:this.state.password,
           email:this.state.email
     })
    })
    .then(response => {
        response.json().then(data => {
            if(data.success=="true")
            {
                alert(true);
            }else
            {
                alert("false");
            }
        });
      });
    }catch(e){
        console.log(e)
    }
   
    
}


render(){
    return(
        <div className="row">
        <div className="col-sm-8 px-xl-5 text-xl-center">
        <div className="h2">تسجيل الدخول</div>
        <br/><br/>
        <h3 className="text-danger">{!this.state.result?"" : this.state.err}</h3>
        <form onSubmit={this.submithandler} className="form w-100 py-sm-4">
        <div className="w-100 py-lg-2">
        <input type="text" name="email" value={this.state.email} onChange={this.changehandler} className="form-control text-xl-right" placeholder="الايميل او رقم المستعمل"/>
        </div>
        <div className="w-100 py-lg-2">
        <input type="password" name="password" value={this.state.password} onChange={this.changehandler} className="form-control text-xl-right" placeholder="كلمة السر"/>
        </div>
        <div className="w-100 py-lg-1">
        <button type="submit" className="btn btn-outline-success px-xl-5">الدخول</button>
        </div>
        </form>
        <br/>
        <div className="row text-center text-white py-lg-5">
        <div className="col-sm-4">
        <div className="card bg-primary border-secondary">
        <h2 className="h2">مربع</h2>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card bg-success border-secondary">
        <h2 className="h2">مربع</h2>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card bg-dark border-secondary">
        <h2 className="h2">مربع</h2>
        </div>
        </div>
        </div>
        </div>
        <div className="col-sm-4 text-center text-white">
        <div className="card bg-dark">
        <h3>هام</h3>
        </div>
        <br/>
        <div className="card bg-danger">
        <h3>هام</h3>
        </div>
        </div>
        </div>
    )
}
}