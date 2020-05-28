import React from 'react';

class Medicalfile extends React.Component{
 constructor(props){
     super(props);
     this.state={
          chronic:"",
          chronic_description:"لاشيء",
          allergic:"",
          allergicdescription:"لاشيء",
          blod:"",
          error :'',
          fullname:"",
          email :"",
          password:"",
          phonenumber:'',
          passwordconfiramtion:""
     }
     this.senddata=this.senddata.bind(this);
     this.onchanged=this.onchanged.bind(this);
     this.formvalidation=this.formvalidation.bind(this)
}

//onchanged 
onchanged= event =>{
    this.setState({
        [event.target.name]:event.target.value
    });
    }

formvalidation()
{
    if(this.state.phonenumber.substr(0,2)!=='06' && this.state.phonenumber.substr(0,2)!=='07')
    {
        alert(this.state.phonenumber.substr(0,2))
        this.setState({error:"المرجو ادخال 06 او 07 في اول الرقم"})
        return true;
    }
    if(this.state.phonenumber===null || this.state.phonenumber==="" || this.state.phonenumber.length!==10 )
    {
        this.setState({error:"يجب على رقم الهاتف ان يتكون من عشرة ارقام"})
      return true;
    }
    if(this.state.fullname===null || this.state.fullname==="")
    {
        this.setState({error:"المرجو التاكد من ادخال الاسم الكامل"})
        return true;
    }
    if(this.state.email===null || this.state.email==="")
    {
        this.setState({error:"المرجو التاكد من ادخال البريد الالكتروني"})
        return true;
    }
    if(this.state.password===null || this.state.password==="" || this.state.password.length<8)
    {
        this.setState({error:"المرجو الناكد من ان كلمة المرور تتجاوز 8 رموز او غير فارغة"})
        return true;
    }
    if(this.state.passwordconfiramtion!=this.state.password)
    {
        this.setState({error:"كلمة السر غير متطابقة المرجو اعادة ادخال نفس كلمة السر"})
        return true;
    }
    if(this.state.allergic===null || this.state.allergic==="" || this.state.chronic===null || this.state.chronic==="")
    {
        this.setState({error:"المرجو التاكد من اختياركم لاحد الاجابات ب نعم ام لا"})
      return true;
    }
    if(this.state.blod===null || this.state.blod==="")
    {
        this.setState({error:"المرجو اختيار فصيلة الدم المناسبة"})
        return true;
    }
    return false;
}
//post data to the server
  senddata(event){
      event.preventDefault();
   if(!this.formvalidation())
    {
    try{
    fetch('http://localhost:8000/api/sickers/new',{
     method:'post',
     headers:{
         'Accept':'application/json',
         'Content-type': 'application/json'
     },
     body:JSON.stringify({
             Blod:this.state.blod,
             Allergic:this.state.allergic+" - "+this.state.allergicdescription,
             Chronic:this.state.chronic+" - "+this.state.chronic_description,
             Fullname:this.state.fullname,
             Email : this.state.email,
             Password:this.state.passwordconfiramtion,
             phonenumber:this.state.phonenumber
     })
    })
    .then(response=>
    response.json().then(data=>{
         console.log(data)
         if(data.success==='true')
         {
            document.getElementById('window').style.display="block";
         }
         else{
            if(data.err==="emailerror")
            {
                alert("email exist")
                this.setState({error:"البريد الالكتروني موجود سابقا"})
            }else{
                this.setState({error:'المرجو الاعادة لاحقا او الابلاغ عن مشكلة'})
            }
         }
     })
    )
}catch(e){
        alert(e)
    }
    }
}

//lanched window for register
window=(
        <div id="window" className="position-absolute w-50 h-50 bg-dark text-center text-white h3 py-lg-5 px-lg-5 position-fixed" style={{zIndex:"1",display:"none"}} >
          <div>
          لقد تم التسجيل بنجاح<br/><br/>
          <i className="fas fa-check-square text-success h1"></i>
          </div>
          <br/><br/>
          <button onClick={()=>this.empty()} className="btn btn-success w-25" >تم</button>
        </div>
    )
//hide the success bar and let all inputs empty
empty(){
    document.getElementById('window').style.display="none";
    this.setState({
        chronic:"",
        chronic_description:"لاشيء",
        allergic:"",
        allergicdescription:"لاشيء",
        blod:"",
        error : 'المرجو اتباع التعليمات',
        fullname:"",
        email :"",
        password:"",
        passwordconfiramtion:""
    })
}

render(){

//listning to document click
document.addEventListener('click',()=>{

    try{
        var x= document.getElementById('window');
        if(x.style.display==="block")
        {
            x.style.display="none"
        }
    }catch{}
})
    return(
        <div className=" justify-content-lg-center w-100 medicalfil-cover h6">
        <div className="row justify-content-lg-center text-center">
        <br/><br/>
        {this.window}
        <div className=" col-md-8 justify-content-center">
        <form onSubmit={this.senddata} className="form w-auto bg-transparent">
        {this.state.error==''? <p></p> :
        <div id="error" className="card bg-danger text-center w-100">
        <p className="text-white">{this.state.error}</p>
        </div>}
        <table className="table">
        <tbody>
        <tr>
        <td>
        <input name="phonenumber" value={this.state.phonenumber} onChange={this.onchanged} className="w-100 form-control text-right" placeholder=" المرجو ادخال  رقم للهاتف : سيتم ارسال رمزكم عبر رسالة قصيرة الى لرقم الذي تدخلونه" />
        </td>
        </tr>
        <tr>
        <td>
        <div className="row">
        <div className="col-sm-6">
        <input name="email" value={this.state.email} onChange={this.onchanged} type="email" className="form-control text-right" id="email" aria-describedby="email" placeholder="البريد الالكتروني"/>
        <br/>
        </div>
        <div className="col-sm-6">
        <input name="fullname" value={this.state.fullname} onChange={this.onchanged} type="text" className="form-control text-right" id="fullname" aria-describedby="full name" placeholder="الاسم الكامل"/>
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div className="row">
        <div className="col-sm-6">
        <input name="passwordconfiramtion" value={this.state.passwordconfiramtion} onChange={this.onchanged} type="password" className="form-control text-right" id="confirmpassword" aria-describedby="password confiramtion" placeholder="اعد ادخال كلمة السر مرة اخرى"/>
        <br/>
        </div>
        <div className="col-sm-6">
        <input name="password" value={this.state.password} onChange={this.onchanged} type="password" className="form-control text-right" id="password" aria-describedby="password" placeholder="ادخل كلمة السر"/>
        </div>
        </div>
        </td>
        </tr>
        <tr className=" text-right">
        <td>
        <p>هل تعاني من مرض مزمن؟</p>
        <div onChange={this.onchanged} className="row bg-white">
        <div className="col-4">
        <label>نعم</label>
        <input className="w-25" style={{fontSize:"30px"}} onClick={()=>document.getElementById('chronic').style.display="block"} value="نعم اعاني من مرض مزمن" name="chronic"  type="radio" />
        </div>
        <div className="col-4">
        <label>لا</label>
        <input className="w-25" onClick={()=>document.getElementById('chronic').style.display="none"}  value="لا اعاني من مرض مزمن" name="chronic" type="radio" />
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <textarea  style={{display:"none"}} name="chronic_description" value={this.state.chronic_description} onChange={this.onchanged} className="form-control text-right" id="chronic" aria-describedby="" placeholder="ماهو؟"/>
        </td>
        </tr>
        <tr className="text-right">
        <td>
        <p>هل تعاني من حساسية؟ </p>
        <div onChange={this.onchanged} className="row bg-white">
        <div className="col-4">
        <label>نعم</label>
        <input className="w-25" onClick={()=>document.getElementById('allergic').style.display="block"} value="نعم اعاني من حساسية" name="allergic" type="radio" />
        </div>
        <div className="col-4">
        <label>لا</label>
        <input className="w-25" onClick={()=>document.getElementById('allergic').style.display="none"} value="لا اعاني من حساسية" name="allergic" type="radio" />
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <textarea style={{display:"none"}} name="allergicdescription" value={this.state.allergicdescription} onChange={this.onchanged}  className="form-control text-lg-right" id="allergic" aria-describedby="" placeholder="ادكر نوعها؟"/>
        </td>
        </tr>
        <tr className="text-center">
        <td className="w-100">
        <div className="w-100">
        <select style={{marginLeft:"50%"}} value={this.state.blod} name="blod" onChange={this.onchanged} id="blodtype" className=" dropdown-header font-weight-bold w-50" placeholder="ماهي فصيلة دمك">
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
        </td>
        </tr>
        <tr className="text-center">
        <td>
        <br/>
        <input className="btn btn-success w-50" type="submit" value="حفظ البيانات"/>
        </td>
        </tr>
        </tbody>
        </table>
        </form>
        <br/>
        </div>
        <br/>
        <div className="col-md-4 text-center text-white">
        <div className="card bg-dark">
        <h3>هام</h3>
        <p>بتسجيلك فانت توافق على جميع الشروط و التعليمات المنصوص عليها و التي يمكنك الاطلاع عليها من هنا <a href=""> الخصوصية </a></p>
        </div>
        <br/>
        <div className="card bg-success">
        <h3>ملاحظات</h3>
        <p>المرجو ادخال رمز لايقل عن 6 احرف</p>
        <p>المرجو تحديد الاختيارات وملئ الاجابات اذا اقتضت الضرورة</p>
        <p>اي خطا في الادخال سيتم عرضه على المربع الاحمر</p>
        </div>
        <br/>
        <div className="card bg-primary">
        <h3>ملاحظات</h3>
        <p>اي معلومات غير صحيحة او مضللة يتحمل صاحبها المسئولية</p>
        </div>
        <br/>
        </div>
        </div>
        </div>
    );
}

}

export default Medicalfile;