import React, { useState } from 'react';
import Tableuser from './admin-details/tableuser';
import Addnew from './admin-details/addnew';
import {Redirect} from 'react-router-dom';

const Adminpanel=()=>{

const [root,setroot]=useState('');

const changeroots=(rootname)=>{
switch (rootname){
    case 'addnew':
        return <Addnew/>
    default :
      return <Tableuser/>
}
}

//logout from admin panel 
const logout=()=>{
    sessionStorage.removeItem('admin')
    window.location.reload();
}

if(sessionStorage.getItem('admin')!==null)
{
return(
    <div>
    <br/>
    <div className="row w-100">
    <div className="col-sm-2 text-center ">
    <ul className="list-group w-100">
    <li className="py-4 list-group-item w-100 admin-list"><button onClick={()=>setroot('tableuser')} className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-users"></i></button></li>
    <li className="py-4 list-group-item w-100 admin-list"><button onClick={()=>setroot('addnew')} className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-file-medical"></i></button></li>
    <li className="py-4 list-group-item w-100 admin-list"><button className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-database"></i></button></li>
    <li className="py-4 list-group-item w-100 admin-list"><button className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-hand-holding-medical"></i></button></li>
    <li className="py-4 list-group-item w-100 admin-list"><button onClick={()=>logout()} className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-power-off"></i></button></li>
    </ul>
    </div>
    <div className="col-sm-10 w-100 text-center justify-content-center">
    {changeroots(root)}
    </div>
    </div>
    <br/>
    </div>
)
}else{
 return (<Redirect to='/admin' />)
}
}

export default Adminpanel;


