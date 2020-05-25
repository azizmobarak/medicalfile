import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';

const Tableuser=()=>{

const [key,setkey] = useState('');
const [tab,settab]=useState([]);
const [id,setid]=useState(0);
const [confirmationdelete,setconfirmationdelete]=useState('');
const [email, setemail] = useState('')
const [fullname, setfullname] = useState('')
const [Allergic, setAllergic] = useState('')
const [Chronic, setChronic] = useState('')
const [Blod, setBlod] = useState('')
const [updateinforsuccess, setupdateinforsuccess] = useState('')


const emailonchanged=(e)=>{
setemail(e.target.value);
}
const allergiconchanged=(e)=>{
setAllergic(e.target.value);
}
const chroniconchanged=(e)=>{
setChronic(e.target.value);
}
const blodonchanged=(e)=>{
setBlod(e.target.value);
}
const nameonchanged=(e)=>{
setfullname(e.target.value);
}
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
     setid(data[0].ID)
}


//show and hide edited row
const updatebtnclick=()=>{
 if(tab.length>0)
 {
  let showformupdate = document.getElementById('updateform');
  if(showformupdate.style.display==="none")
  {
   showformupdate.style.display="block";
   setid(tab[0].ID);
   setemail(tab[0].Email);
   setfullname(tab[0].Fullname);
   setAllergic(tab[0].Allergic);
   setChronic(tab[0].Chronic);
   setBlod(tab[0].Blod);
  }else{
   showformupdate.style.display="none";
  }
 }else{
   alert("المرجو العثور على مستخدم اولا")
 }
 }

 //handle click on update items and return the position of the ID of button from the rows matched to name of the button
const updatedata=(e)=>{
e.preventDefault();
try{
  const url = fetch('http://localhost:8000/api/sickers/update/userfromadmin',
  {
      method:'put',
      mode:'cors',
      headers:{
          'Accept': 'application/json',
           'Content-Type': 'application/json',
           'authorization':sessionStorage.getItem('admin')
          },
      body:JSON.stringify(
          {
             ID :id,
              email :email,
              fullname:fullname,
              Chronic:Chronic,
              Allergic:Allergic,
              Blod:Blod
          }
      )
  }
  )
  const response = url;
  const data = response;
  console.log('updateed  '+data);
  setupdateinforsuccess("تم تحديث المعلومات بنجاح");
  setTimeout(()=>{
    setupdateinforsuccess("")
    document.location.reload();
  },4000)
 }catch{
    setupdateinforsuccess("فشل في التحديث المرجو الابلاغ عن المشكلة او الاعادة لاحقا")
}
}

 //handle click to delete crruent row
 const deleterow=(id)=>{
    try{
      if(tab.length==0 && id==0)
      {
          alert("الجدول فارغ المرجو البحث عن مستخدم اولا")
      }else{
        try{
         
       const url=fetch('http://localhost:8000/api/sickers/delete/user/'+id+'',
         {
             method:'delete',
             headers:{
                 'authorization':sessionStorage.getItem('admin')
             }
         }
         );
        setconfirmationdelete('لقد تم ازالة هذا المستخدم بنجاح')
        document.getElementById('window').style.display="none";
        setTimeout(()=>{
          setconfirmationdelete('');
        },4000)
        }catch(e){
       alert(e)
        }
      }
    }catch{

    }
 }

 //window confirmation 
 const window=(
    <div className="position-absolute w-50 h-50 bg-dark text-center text-white h3 py-lg-5 px-lg-5 position-fixed" style={{zIndex:"1"}} >
      <div>
      هل تريد حذف هذا المستخدم
      <br/><br/>
      <i className="fas fa-remove text-danger h1"></i>
      </div>
      <br/><br/>
      <button onClick={()=>deleterow(id)} className="btn btn-success w-25" >نعم</button>
      <button onClick={()=>document.getElementById('window').style.display="none"}  style={{marginLeft:"10vh"}}  className="btn btn-danger w-25" >لا</button>
    </div>
)
const rows=tab.map((item)=>{
    return(
  <div>
  <p className="text-white bg-success h6">{confirmationdelete}</p><br/>
  <table className="table text-center">
  <tr className="text-center bg-dark text-white h6">
    <td>الرمز</td><td>الاسم</td><td>الحساسية</td><td>مرض مزمن</td><td>فصيلة الدم</td>
    </tr>
  <tr className="text-center">
  <td>{item.ID}</td>
  <td>{item.Fullname}</td>
  <td>{item.Allergic}</td>
  <td>{item.Chronic}</td>
  <td>{item.Blod}</td>
  </tr>
  </table>
  </div>
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
          <div>
          {rows}
          </div>
         }
       </div>
          } 
          <div>
          <br/>
          <button style={{marginRight:"5vh"}} onClick={()=>updatebtnclick()} className="btn btn-primary"><i style={{fontSize:"20px"}} className="fas fa-edit"></i></button>
          <button style={{marginLeft:"5vh"}} onClick={()=>document.getElementById('window').style.display="block"} className="btn btn-danger"><i style={{fontSize:"20px"}} className="fas fa-archive"></i></button>
          </div>
          <div id="window" style={{marginLeft:"35vh",marginTop:"-20vh",display:'none'}}>{window}</div>
          <br/><br/>
          <div  className="w-50" id="updateform" style={{display:"none",marginLeft:"20%"}}>
          <div>
          <h1 className="h1">تحديث المعطيات</h1>
          </div><br/>
          <form onSubmit={updatedata} className="form-group py-md-2">
          <div>
          <p className="bg-success text-white h6">{updateinforsuccess}</p>
          </div>
          <div className="row">
          <div className="col-sm-6">
          <input style={{marginLeft:"30%"}} onChange={nameonchanged} type="text" name="fullname" value={fullname} className=" form-control text-right"/>
          </div>
          <div className="col-sm-6 text-right">
          <label>الاسم الشخصي للمستعمل</label>
          </div>
          </div>
          <br/>
          <div className='form-row'>
          <div className="col-sm-6">
          <input style={{marginLeft:"27%"}} onChange={emailonchanged}  type="text" name="email" value={email} className=" form-control text-right"/>          
          </div>
          <div className="col-sm-6 text-right">
          <label>البريد الالكتروني</label>
          </div>
          </div>
          <br/>
          <div>
          <div className="text-right">
          <label>الحساسية</label>
          </div>
          <textarea onChange={allergiconchanged}  type="text" name="Allergic" value={Allergic} className=" form-control text-right"/>
          </div>
          <br/>
          <div className="text-right">
          <label>مرض مزمن</label>
          </div>
          <div>
          <textarea onChange={chroniconchanged}  type="text" name="Chronic" value={Chronic} className=" form-control text-right"/>
          </div>
          <br/>
          <div className="text-right">
          <label>فصيلة الدم</label>
          </div>
          <div className="w-100">
          <select onChange={blodonchanged}  value={Blod}  name="Blod" id="blodtype" className=" dropdown-header font-weight-bold w-50 text-right" placeholder="ماهي فصيلة دمك">
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
          <div className=" text-center">
          <button type='submit' className="btn btn-outline-primary w-50">تحديث المعطيات</button>
          </div>
          <br/>
          </form>
          </div>
        </div>
    )
}

export default Tableuser;