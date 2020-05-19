import React from 'react';
import login from './user-login';

export default class Usermain extends React.Component{

    constructor(props){
        super(props);
        this.state={
        ID:localStorage.getItem('ID'),
        Blod:"",
        Allergic:"",
        Chronic:"",
        email:'',
        fullname :"",
        password:"",
        res :[],
        laoding:true
        }
    }

  async  componentWillMount(){
    if(localStorage.getItem('ID')!==''|| localStorage.getItem('ID')!==null){
      const url =await  fetch('http://localhost:8000/api/sickers/filter/'+this.state.ID+'')
     const response = await url.json();
     const data = response;
     this.setState({
         email : data[0].Email,
         fullname:data[0].Fullname,
         Chronic:data[0].Chronic,
         Allergic:data[0].Allergic,
         Blod:data[0].Blod
     })
            }
    }

//empty storage
 close=()=>{
 localStorage.removeItem('ID');
 alert("close");
}

    render(){
        if(localStorage.getItem('ID')==''|| localStorage.getItem('ID')==null)
        {
            alert(localStorage.getItem('ID'))
            return (<p>login</p>)
        }
        return(
            <div>
            <nav className="nav navbar-brand text-sm-right w-100">
            <button onClick={()=>this.close()} className="btn btn-dark">الخروج</button>
            <button className="btn btn-dark">الرئيسية</button>
            </nav>
            <br/><br/>
            <div className="row">
            <div className="col-sm-8 text-sm-center">
            <div>
            <h1 className="h1">تحديث المعطيات الشخصية</h1>
            </div><br/>
            <form className="form-group py-md-2">
            <div className="row">
            <div className="col-sm-6">
            <input disabled type="text" name="ID" value={this.state.ID} className=" form-control text-right"/>
            </div>
            <div className="col-sm-6">
            <input type="text" name="fullname" value={this.state.fullname} className=" form-control text-right"/>
            </div>
            </div>
            <br/>
            <div>
            <input type="text" name="email" value={this.state.email} className=" form-control text-right"/>
            </div>
            <br/>
            <div>
            <textarea type="text" name="Allergic" value={this.state.Allergic} className=" form-control text-right"/>
            </div>
            <br/>
            <div>
            <textarea type="text" name="Chronic" value={this.state.Chronic} className=" form-control text-right"/>
            </div>
            <br/>
            <div className="w-100">
            <select value={this.state.Blod}  name="Blod" id="blodtype" className=" dropdown-header font-weight-bold w-50 text-right" placeholder="ماهي فصيلة دمك">
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
            <button className="btn btn-outline-primary">تحديث المعطيات</button>
            </div>
            </form>
            </div>
            <div className="col-sm-4 text-sm-center">
            <h1 className="h1">تحديث كلمة المرور</h1>
            <br/>
            <form className="form-group">
            <div>
            <input type="password" className="form-control text-sm-right" placeholder="كلمة السر السابقة"/>
            </div><br/>
            <div>
            <input type="password" className="form-control text-sm-right" placeholder="كلمة السر الجديدة"/>
            </div><br/>
            <div>
            <input type="password" className="form-control text-sm-right" placeholder="اعادة ادخال كلمة السر"/>
            </div><br/>
            <div>
            <button className="btn btn-outline-dark">تحديث كلمة المرور</button>
            </div>
            </form>
            </div><br/>
            </div>
            
            </div>
        
        )
    }
}