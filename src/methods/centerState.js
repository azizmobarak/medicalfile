import React,{useState} from 'react';
import value,{changevalue} from './reducer';
import { connect,useSelector, useDispatch ,useStore } from 'react-redux';
import {store} from '../index';

 




const Center =() =>{

const [err,seterr]=useState("yes")
 

    const v =()=>{console.log(store.getState().user)};

    const [value, setvalue] = useState("hello");
    const desipatch = useDispatch();
const changehandler=e=>{
    seterr(e.target.value);
}

 return( <div>
       <button onClick={()=>v()}>click</button>
        </div> )
}

export default Center;