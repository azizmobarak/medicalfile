import React from 'react';

class Medicalfile extends React.Component{
 constructor(props){
     super(props);
     this.state={
          chronic:"",
          chronic_description:"no",
          allergic:"",
          allergicdescription:"no",
          blod:"",
          code:"",
     }
     this.chronicchange = this.chronicchange.bind(this);
     this.allergicchanged=this.allergicchanged.bind(this);
     this.codechanged = this.codechanged.bind(this);
     this.blodchanged = this.blodchanged.bind(this);
     this.chronicdescriptionchanged=this.chronicdescriptionchanged.bind(this);
     this.allergicdescriptionchanged=this.allergicdescriptionchanged.bind(this);
     this.senddata=this.senddata.bind(this);
}
//chronic radio changed
chronicchange(event)
{
 this.setState({
    chronic:event.target.value,
 });
}
//chronic description text changed
chronicdescriptionchanged(event){
    this.setState({
     chronic_description:event.target.value,
    });
}
//allergic radio changed
allergicchanged(event){
    this.setState({
        allergic:event.target.value,
    });
}
//allergic description text changed
allergicdescriptionchanged(event){
    this.setState({
    allergicdescription:event.target.value,
    });
}
//the blod type changed
blodchanged(event)
{
    this.setState({
    blod:event.target.value,
    });
}
//code text changed
codechanged(event){
this.setState({
code:event.target.value,
});
}

formvalidation()
{
    if(this.state.code==null || this.state.code==="" || this.state.code.length<6 )
    {
        alert("الرمز يجب ان يكون صحيحا المرجو اتباع التعليمات على المربع الاحمر")
        return true;
    }
    if(this.state.allergic===null ||this.state.allergic==="" || this.state.chronic===null || this.state.chronic==="")
    {
      alert("المرجو التاكد من اختياركم لاحد الاجابات ب نعم ام لا")
      return true;
    }
    if(this.state.blod===null || this.state.blod==="")
    {
        alert("المرجو اختيار فصيلة الدم المناسبة")
        return true;
    }
    return false;
}
//post data to the server
  senddata(event){
  /* if(!this.formvalidation())
    {
    try{
    fetch('http://localhost:8000/api/addsickers',{
     method:'post',
     headers:{
         'Accept':'application/json',
         'Content-type': 'application/json'
     },
     body:JSON.stringify({
         ID:this.state.code,
         Blod:this.state.blod,
         Allergic:this.state.allergicdescription,
         Chronic:this.state.chronic_description
     })
    });
    }catch(e){
        alert(e)
    }
    }*/
    alert(JSON.stringify(this.state))
    
}
///
render(){
    return(
        <div className="row">
        <div className=" col-md-8 justify-content-center">
        <form onSubmit={this.senddata} className="form w-auto">
        <table className="table">
        <tr>
        <td>
        <input onChange={this.codechanged} type="text" className="form-control text-lg-right" id="ID" aria-describedby="code identifient" placeholder="ادخل رمزك هنا"/>
        </td>
        </tr>
        <tr className=" text-lg-right">
        <td>
        <p>هل تعاني من مرض مزمن؟</p>
        <div onChange={this.chronicchange} className="row">
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
        <textarea  style={{display:"none"}} name="Chronic" onChange={this.chronicdescriptionchanged} className="form-control text-lg-right" id="chronic" aria-describedby="" placeholder="ماهو؟"/>
        </td>
        </tr>
        <tr className="text-lg-right">
        <td>
        <p>هل تعاني من حساسية؟ </p>
        <div onChange={this.allergicchanged} className="row">
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
        <textarea style={{display:"none"}} name="Allergic" onChange={this.allergicdescriptionchanged}  className="form-control text-lg-right" id="allergic" aria-describedby="" placeholder="ادكر نوعها؟"/>
        </td>
        </tr>
        <tr className=" text-right">
        <td>
        <select value="blodtype" name="Blod" onChange={this.blodchanged} id="blodtype" className="dropdown-item font-weight-bold" placeholder="ماهي فصيلة دمك">
        <option className="text-lg-right">ماهي فصيلة دمك</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        </select><br/>
        <p> {this.state.blod} : لقد اخترت فصيلة الدم</p>
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
        </div>
        <div className="col-md-4 text-lg-center text-white">
        <div className="card bg-danger">
        <h3>ملاحظات</h3>
        <p>املء الاسمتارة</p>
        </div>
        <br/>
        <div className="card bg-primary">
        <h3>ملاحظات</h3>
        <p>املء الاسمتارة</p>
        </div>
        <br/>
        <div className="card bg-secondary">
        <h3>ملاحظات</h3>
        <p>املء الاسمتارة</p>
        </div>
        </div>
        </div>
    );
}

}

export default Medicalfile;