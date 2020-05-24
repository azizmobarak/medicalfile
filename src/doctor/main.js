import React,{useState} from 'react';
import { useSelector, useStore } from 'react-redux';
import { store } from '..';
import { Redirect } from 'react-router-dom';
import Reactanime from 'react-animejs';
const {Anime}=Reactanime;


const Mainpanel=()=>{

const [key, setkey] = useState('');
const [tab,settab]=useState([]);

const onsearchchange=async(e)=>{
 setkey(e.target.value);
 settab([]);
 const url =await  fetch('http://localhost:8000/api/sickers/filter/'+e.target.value+'',
 {
   headers:{
    authorization:sessionStorage.getItem('doctor')
   }
 }
 )
     const response = await url.json();
     const data = response;
     settab(data);
}

const row = tab.map((item)=>{
   return(
    <tr className="text-center">
    <td>{item.ID}</td>
    <td>{item.Fullname}</td>
    <td>{item.Allergic}</td>
    <td>{item.Chronic}</td>
    <td>{item.Blod}</td>
    </tr>
   )
  })

const signout=()=>{
  sessionStorage.removeItem('doctor');
  window.location.reload();
}

if(sessionStorage.getItem('doctor')!==null)
{
    return(
        <div>
        <div className="nav navbar">
        <button onClick={()=>signout()} className="btn btn-dark">اغلاق</button>
        </div>
        <div className="row">
       <div className="col-sm-3"></div>
       <div className="col-sm-5">
      <form className="form-group">
      <input value={key} onChange={onsearchchange} type="text" className="form-control text-right" placeholder="ابحث باستخدام الاسم او الرقم او الاميل"/>
      </form>
      <br/>
       </div>
       <div className="col-sm-3"></div>
      </div>
     
      <div className="row">
      <table className="table text-center">
      {key!='' && row.length<1?
      <div className="text-center w-100">
      <Anime className="text-center"
      initial={[
        {
          targets: '#Box',
          translateX: 100,
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutCirc',
       }
      ]}
      >
      <div id="Box" className="text-center text-white h3 bg-dark" style={{width:"20%",height:"5%",marginLeft:"30%"}}> ... جاري البحث  </div>
      </Anime>
        </div> :
      <tr className=" text-center bg-dark text-white h6">
      <td>الرمز</td><td>الاسم</td><td>الحساسية</td><td>مرض مزمن</td><td>فصيلة الدم</td>
      </tr>
       }
       {row}
      </table>
      </div>
      <br/><br/>
        </div>
    )
}else
{
  return (<Redirect to='/searchlogin'/>)
}
}

export default Mainpanel;