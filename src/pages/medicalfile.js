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
          code:"",
          error : 'المرجو اتباع التعليمات'
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
    if(this.state.code==null || this.state.code==="" || this.state.code.length<6 )
    {
        this.setState({error:"الرمز يجب ان يكون صحيحا المرجو اتباع التعليمات على المربع الاحمر"})
        return true;
    }
    if(this.state.allergic===null ||this.state.allergic==="" || this.state.chronic===null || this.state.chronic==="")
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
    fetch('https://getintohome.store/api/addsickers/',{
     method:'post',
     mode:'no-cors',
     headers:{
         'Accept':'application/json',
         'Content-type': 'application/json'
     },
     body:JSON.stringify({
            ID:this.state.code,
             Blod:this.state.blod,
             Allergic:this.state.allergic+" - "+this.state.allergicdescription,
             Chronic:this.state.chronic+" - "+this.state.chronic_description
     })
    });
    document.write('<div style="width:100%;text-align:center;"><div style="background-color:green;color:white"><h3><font size:"20">تم تسجيل طلبكم بنجاح</font></h3></div><br/><a href="/">رجوع<a></div>')
    }catch(e){
        alert(e)
    }
    }
}
///
render(){
    return(
        <div className=" justify-content-lg-center w-100">
        <div className="row justify-content-lg-center">
        <br/><br/>
        <div className=" col-md-8 justify-content-center">
        <form onSubmit={this.senddata} className="form w-auto">
        <div id="error" className="card bg-danger text-sm-center w-100">
        <p className="text-white">{this.state.error}</p>
        </div>
        <table className="table">
        <tr>
        <td>
        <input name="code" value={this.state.code} onChange={this.onchanged} type="text" className="form-control text-lg-right" id="ID" aria-describedby="code identifient" placeholder="ادخل رمزك هنا"/>
        </td>
        </tr>
        <tr className=" text-lg-right">
        <td>
        <p>هل تعاني من مرض مزمن؟</p>
        <div onChange={this.onchanged} className="row">
        <div className="col-4">
        <label>نعم</label>
        <input onClick={()=>document.getElementById('chronic').style.display="block"} value="نعم اعاني من مرض مزمن" name="chronic"  type="radio" />
        </div>
        <div className="col-4">
        <label>لا</label>
        <input onClick={()=>document.getElementById('chronic').style.display="none"}  value="لا اعاني من مرض مزمن" name="chronic" type="radio" />
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <textarea  style={{display:"none"}} name="chronic_description" value={this.state.chronic_description} onChange={this.onchanged} className="form-control text-lg-right" id="chronic" aria-describedby="" placeholder="ماهو؟"/>
        </td>
        </tr>
        <tr className="text-lg-right">
        <td>
        <p>هل تعاني من حساسية؟ </p>
        <div onChange={this.onchanged} className="row">
        <div className="col-4">
        <label>نعم</label>
        <input onClick={()=>document.getElementById('allergic').style.display="block"} value="نعم اعاني من حساسية" name="allergic" type="radio" />
        </div>
        <div className="col-4">
        <label>لا</label>
        <input onClick={()=>document.getElementById('allergic').style.display="none"} value="لا اعاني من حساسية" name="allergic" type="radio" />
        </div>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <textarea style={{display:"none"}} name="allergicdescription" value={this.state.allergicdescription} onChange={this.onchanged}  className="form-control text-lg-right" id="allergic" aria-describedby="" placeholder="ادكر نوعها؟"/>
        </td>
        </tr>
        <tr className=" text-right">
        <td>
        <select value={this.state.blod} name="blod" onChange={this.onchanged} id="blodtype" className="dropdown-item font-weight-bold" placeholder="ماهي فصيلة دمك">
        <option className="text-lg-right">ماهي فصيلة دمك</option>
        <option value="A+ فصيلة">A+ فصيلة</option>
        <option value="A- فصيلة">A- فصيلة</option>
        <option value="AB+ فصيلة">AB+ فصيلة</option>
        <option value="AB- فصيلة">AB- فصيلة</option>
        <option value="O+ فصيلة">O+ فصيلة</option>
        <option value="O- فصيلة">O- فصيلة</option>
        <option value="B+ فصيلة">B+ فصيلة</option>
        <option value="B- فصيلة">B- فصيلة</option>
        </select><br/>
        </td>
        </tr>
        <tr className="text-lg-right">
        <td>
        <br/>
        <input className="btn btn-outline-success" type="submit" value="حفظ البيانات"/>
        </td>
        </tr>
        </table>
        </form>
        <br/>
        </div>
        <br/>
        <div className="col-md-4 text-lg-center text-white">
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