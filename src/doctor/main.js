import React,{useState} from 'react';
import { useSelector, useStore } from 'react-redux';
import { store } from '..';


const Mainpanel=()=>{

const [key, setkey] = useState('');
const [tab,settab]=useState([]);

const onsearchchange=async(e)=>{
    e.preventDefault();
 setkey(e.target.value);
 settab([]);
 const url =await  fetch('http://localhost:8000/api/sickers/filter/'+key+'')
     const response = await url.json();
     const data = response;
     settab(data);
     console.log(data)
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

    return(
        <div>
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
      <table className="table">
      <tr className=" text-center bg-dark text-white h6">
      <td>الرمز</td><td>الاسم</td><td>الحساسية</td><td>مرض مزمن</td><td>فصيلة الدم</td>
      </tr>
      {row}
      </table>
      </div>
      <br/><br/>
        </div>
    )
}

export default Mainpanel;