import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import adminaction from '../../actions/adminaction';
import { store } from '../..';

const Addnew=()=>
{
const admin = useSelector(state=>state.Admin);
const dispatch = useDispatch();

var user,pass='';
const adminchangeusername=(event)=>{
user=event.target.value;
}
const adminchangepassword=(event)=>{
  pass=event.target.value;
}

const click=(event)=>{
    event.preventDefault();
    dispatch(adminaction(user,pass));
    console.log(store.getState())
    console.log(admin.user)
}
return(
    <div className="row text-center">
    <div className="col-sm-6 text-center" >
    <h3>اضافة متحكم جديد</h3>
    <br/>
    <form onSubmit={click} className="form-group">
    <div className="form-row">
    <input name="adminusername" onChange={adminchangeusername} className="form-control" placeholder="new admin username" />
    </div>
    <div className="form-row">
    <input name="adminpassword" onChange={adminchangepassword} className='form-control' placeholder="new admin password" />
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
    <form className="form-group">
    <div className="form-row">
    <input className="form-control" placeholder="new admin username" />
    </div>
    <div className="form-row">
    <input className='form-control' placeholder="new admin password" />
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