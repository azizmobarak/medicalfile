import React, { useState } from 'react';
import Tableuser from './admin-details/tableuser';
import Addnew from './admin-details/addnew';


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

return(
    <div>
    <br/>
    <div className="row w-100">
    <div className="col-sm-1 bg-dark text-center">
    <ul className="list-group">
    <li className="py-4"><button onClick={()=>setroot('tableuser')} className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-users"></i></button></li>
    <li className="py-4"><button onClick={()=>setroot('addnew')} className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-file-medical"></i></button></li>
    <li className="py-4"><button className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-database"></i></button></li>
    <li className="py-4"><button className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-hand-holding-medical"></i></button></li>
    <li className="py-4"><button className='btn btn-dark w-100'><i style={{fontSize:"25px"}} className="fas fa-hammer"></i></button></li>
    </ul>
    </div>
    <div className="col-sm-11 text-center justify-content-center">
    {changeroots(root)}
    </div>
    </div>
    <br/>
    </div>
)
}

export default Adminpanel;


