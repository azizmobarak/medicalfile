import React from 'react';
import login from './user-login';
import {Redirect} from 'react-router-dom';
import {Dispatch} from 'redux';
import {connect, useDispatch} from 'react-redux';
import {useraction} from '../actions/useraction';


 class Usermain extends React.Component{

    constructor(props){
        super(props);
        this.state={
        ID:sessionStorage.getItem('ID'),
        Blod:"",
        Allergic:"",
        Chronic:"",
        email:'',
        fullname :"",
        password:"",
        passwordconfirm:'',
        passwordnew:'',
        res :[],
        laoding:true,
        user:props.User,
        err:''
        }
    }

  async  componentWillMount(){
    if(localStorage.getItem('ID')!==null){
      const url =await  fetch('http://localhost:8000/api/sickers/users/currentuser',
      {
          headers:{
              'Content-type':'json/application',
              'authorization':sessionStorage.getItem('ID')
          }
      }
      )
       console.log(sessionStorage.getItem('ID'))
     const response = await url.json();
     const data = response;
     this.setState({
         email : data[0].Email,
         fullname:data[0].Fullname,
         Chronic:data[0].Chronic,
         Allergic:data[0].Allergic,
         Blod:data[0].Blod,
         res:data
     })
            }
    }

//update user data
updatedata=(e)=>{
    e.preventDefault();
const url = fetch('http://localhost:8000/api/sickers/update/user/',
{
    method:'put',
    mode:'cors',
    headers:{
        'Accept': 'application/json',
         'Content-Type': 'application/json',
         'authorization':sessionStorage.getItem('ID')
        },
    body:JSON.stringify(
        {
            email :this.state.email,
            fullname:this.state.fullname,
            Chronic:this.state.Chronic,
            Allergic:this.state.Allergic,
            Blod:this.state.Blod
        }
    )
}
)
const response = url;
const data = response;
console.log('updateed  '+data);
}

//update password 
updatepassword=(e)=>{

alert(this.state.password+'\n'+this.state.passwordconfirm+'\n'+this.state.passwordnew)

    e.preventDefault();
    if(this.passwordverification()===true)
    {
        alert('get')
const url = fetch('http://localhost:8000/api/sickers/update/password/',
{
    method:'put',
    mode:'cors',
    headers:{
        'Accept': 'application/json',
         'Content-Type': 'application/json',
         'authorization':sessionStorage.getItem('ID')
        },
    body:JSON.stringify(
        {
            password:this.state.passwordnew,
            oldpassword:this.state.password
        }
    )
}
)
const response = url;
const data = response;
console.log('updateed  '+data);
    }
}
 
//change values
onchanged= event =>{
    this.setState({
        [event.target.name]:event.target.value
    });
    }

//password verification 
passwordverification=()=>{
    if(this.state.passwordnew!==this.state.passwordconfirm)
    {
       this.setState({err:"كلمة السر غير مطابقة"});
       return false;
    }
    if(this.state.password==null || this.state.password==="" ||this.state.passwordconfirm==null || this.state.passwordconfirm==="" || this.state.passwordnew==null || this.state.passwordnew==="" )
    {
        this.setState({err:"المرجو ملء جميع الخانات"});
        return false;
    }
    if(this.state.passwordnew.length<8)
    {
        this.setState({err:"كلمة اقل من 8 احرف"});
        return false;
    }
    this.setState({err:""});
    return true;
}

render(){
        if(sessionStorage.getItem('ID')==''|| sessionStorage.getItem('ID')==null)
        {
            return (<Redirect to="/userlogin"/>)
        }
        return(
            <div>
            <br/><br/>
            {this.state.res.length<1?
            <p className="h1 text-center">Loading ...</p>:
            <div className="row">
            <div className="col-sm-8 text-center">
            <div>
            <h1 className="h1">تحديث المعطيات الشخصية</h1>
            </div><br/>
            <form onSubmit={this.updatedata} className="form-group py-md-2">
            <div className="row">
            <div className="col-sm-6">
            <input disabled type="text" name="ID" value={this.state.ID} className=" form-control text-right"/>
            <br/>
            </div>
            <div className="col-sm-6">
            <input onChange={this.onchanged} type="text" name="fullname" value={this.state.fullname} className=" form-control text-right"/>
            </div>
            </div>
            <br/>
            <div>
            <input onChange={this.onchanged}  type="text" name="email" value={this.state.email} className=" form-control text-right"/>
            </div>
            <br/>
            <div>
            <textarea onChange={this.onchanged}  type="text" name="Allergic" value={this.state.Allergic} className=" form-control text-right"/>
            </div>
            <br/>
            <div>
            <textarea onChange={this.onchanged}  type="text" name="Chronic" value={this.state.Chronic} className=" form-control text-right"/>
            </div>
            <br/>
            <div className="w-100">
            <select onChange={this.onchanged}  value={this.state.Blod}  name="Blod" id="blodtype" className=" dropdown-header font-weight-bold w-50 text-right" placeholder="ماهي فصيلة دمك">
            <option className="text-lg-right">ماهي فصيلة دمك</option>
            <option value="A+">A+ فصيلة</option>
            <option value="A-">A- فصيلة</option>
            <option value="AB+">AB+ فصيلة</option>
            <option value="AB-">AB- فصيلة</option>
            <option value="O+">O+ فصيلة</option>
            <option value="O-">O- فصيلة</option>
            <option value="B+">B+ فصيلة</option>
            <option value="B-">B- فصيلة</option>
            </select>
            </div>
            <br/>
            <div className=" text-xl-center">
            <button type='submit' className="btn btn-outline-primary">تحديث المعطيات</button>
            </div>
            <br/>
            </form>
            </div>
            <div className="col-sm-4 text-center">
            <h1 className="h1">تحديث كلمة المرور</h1>
            <br/>
            <form onSubmit={this.updatepassword} className="form-group">
            <p className="text-danger">{this.state.err}</p><br/>
            <div>
            <input name="password" value={this.state.password} onChange={this.onchanged} type="password" className="form-control text-sm-right" placeholder="كلمة السر السابقة"/>
            </div><br/>
            <div>
            <input name="passwordconfirm" value={this.state.passwordconfirm} onChange={this.onchanged} type="password" className="form-control text-sm-right" placeholder="كلمة السر الجديدة"/>
            </div><br/>
            <div>
            <input name="passwordnew" value={this.state.passwordnew} onChange={this.onchanged} type="password" className="form-control text-sm-right" placeholder="اعادة ادخال كلمة السر"/>
            </div><br/>
            <div>
            <button type="submit" className="btn btn-outline-dark">تحديث كلمة المرور</button>
            </div>
            </form>
            </div><br/>
            </div>
              }
            </div>
        
        )
    }
}


const mapToPropsState=(state)=>{
  return {
      user:state.User,
  }
}

export default connect(mapToPropsState)(Usermain);