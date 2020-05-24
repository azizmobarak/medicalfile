import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';

const Tableuser=()=>{

const [key,setkey] = useState('');
const [tab,settab]=useState([]);

//search for users
const onchange=async(e)=>{
setkey(e.target.value);
settab([]);
 const url =await  fetch('http://localhost:8000/api/sickers/filter/'+e.target.value+'',{
     headers:{
         'authorization':sessionStorage.getItem('admin')
     }
 })
     const response = await url.json();
     const data = response;
     settab(data);
}


//show and hide edited row

//handle click on update items and return the position of the ID of button from the rows matched to name of the button
const updatebtnclick=(e)=>{
 
 }

const rows=tab.map((item)=>{
    return(
    <table className="table text-center">
        <tr className="text-center bg-dark text-white h6">
          <td>الرمز</td><td>الاسم</td><td>الحساسية</td><td>مرض مزمن</td><td>فصيلة الدم</td><td>تعديل</td><td>حذف</td>
          </tr>
        <tr className="text-center">
        <td>{item.ID}</td>
        <td>{item.Fullname}</td>
        <td>{item.Allergic}</td>
        <td>{item.Chronic}</td>
        <td>{item.Blod}</td>
        <td><button onClick={()=>updatebtnclick(item.ID)} name={item.ID} className="btn btn-primary"><i style={{fontSize:"20px"}} className="fas fa-edit"></i></button></td>
        <td><button name={item.ID} className="btn btn-danger"><i style={{fontSize:"20px"}} className="fas fa-archive"></i></button></td>
        </tr>
        </table>
    )
});

    return(
        <div className="justify-content-center">
        <input onChange={onchange} style={{marginLeft:"35%"}} className="input-group text-right w-25 px-4 rounded-0" placeholder="البحث" />
        <br/>
        {key==='' ? 
        <div>
        <p></p>
        <br/>
        <p>يمكنك البحث ياستعمال الاسم او الرمز الذي يحمله اي مستخدم والتعديل على المعلومات الشخصية او حذفها</p>
        <p>يمكنك تغيير او اضافة مستخدمين جدد الى مستعمل عادي او مستعمل للوحة التحكم</p>
        </div>

        :
        <div>
         {rows.length<1?
          <p>لاتوجد نتيجة </p>
          :
          rows
         }
       </div>
          } 
          <div>
          
          </div>
        </div>
    )
}

export default Tableuser;