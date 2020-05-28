import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

const Addnew=()=>{

const [useradmin, setuseradmin] = useState("");
const [passwordadmin,setpasswordadmin]=useState('');
const [userdoctor, setuserdoctor] = useState("");
const [passworddoctor,setpassworddoctor]=useState('');
const [err,seterr]=useState('');


const adminchangeusername=(event)=>{
setuseradmin(event.target.value)
}
const adminchangepassword=(event)=>{
  setpasswordadmin(event.target.value)
}
const onchangeuserdoctor=(event)=>{
  setuserdoctor(event.target.value)
  }
  const onchangepassworddoctor=(event)=>{
    setpassworddoctor(event.target.value)
  }

const addadmin=(event)=>{
    event.preventDefault();
    const url =fetch('http://localhost:8000/api/sickers/admin/addnew/admin',{
      method:"post",
      headers:{
        'Content-type':"application/json",
         'authorization':sessionStorage.getItem('admin')
      },
      body:JSON.stringify({
        email : useradmin,
        password: passwordadmin
      })
    })
    .then(response=>response.json() 
      .then(data=>{
      if(data.success==='true'){
        seterr('لقد تمت اضافة متحكم جديد')
        setTimeout(() => {
          seterr('');
          setuseradmin('');
          setpasswordadmin('');
        }, 5000);
      }else{
        seterr('خطأ المرجو الاعادة لاحقا')
        setTimeout(() => {
          seterr('')
        }, 5000);
      }
    }
    ));
   
}


const adddoctor=(event)=>{
  event.preventDefault();
  const url =fetch('http://localhost:8000/api/sickers/admin/addnew/doctor',{
    method:"post",
    headers:{
      'Content-type':"application/json",
       'authorization':sessionStorage.getItem('admin')
    },
    body:JSON.stringify({
      email : userdoctor,
      password: passworddoctor
    })
  })
  .then(response=>response.json() 
    .then(data=>{
      if(data.success==='true'){
        seterr('لقد تمت اضافة مستعمل جديد')
        setTimeout(() => {
          seterr('');
          setuserdoctor('');
          setpassworddoctor('');
        }, 5000);
      }else{
        seterr('خطأ المرجو الاعادة لاحقا')
        setTimeout(() => {
          seterr('');
        }, 5000);
      }
    }
  ));
 
}

return(
    <div className="row text-center">
    <div className="text-center w-100">
    <p className="h6 bg-success">{err}</p>
    </div>
    <div className="col-sm-6 text-center" >
    <h3>اضافة متحكم جديد</h3>
    <br/>
    <form onSubmit={addadmin} className="form-group">
    <div className="form-row">
    <input value={useradmin} name="adminusername" onChange={adminchangeusername} className="form-control" placeholder="new admin username" />
    </div>
    <div className="form-row">
    <input value={passwordadmin} name="adminpassword" onChange={adminchangepassword} className='form-control' placeholder="new admin password" />
    </div>
    <br/>
    <div className="form-row justify-content-center">
    <button type="submit" className="btn btn-outline-success w-50"><i className="fas fa-save"></i></button>
    </div>
    </form>
    <br/>
    </div>
    <div className="col-sm-6" >
    <h3>اضافة مستعمل للبحث</h3>
    <br/>
    <form onSubmit={adddoctor} className="form-group">
    <div className="form-row">
    <input onChange={onchangeuserdoctor} value={userdoctor} className="form-control" placeholder="new admin username" />
    </div>
    <div className="form-row">
    <input onChange={onchangepassworddoctor} value={passworddoctor} className='form-control' placeholder="new admin password" />
    </div>
    <br/>
    <div className="form-row justify-content-center">
    <button type="submit" className="btn btn-outline-success w-50"><i className="fas fa-save"></i></button>
    </div>
    </form>
    </div>
    </div>
)

}

export default Addnew;