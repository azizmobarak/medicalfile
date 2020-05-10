import React from 'react';
import axios from 'axios';

class Api extends React.Component
{
    constructor(props){
        super(props);
    this.state={
            ID:"",
            Blod:"",
            Allergic:"",
            Chronic:""
        }
      //  this.onchanged=this.onchanged.bind(this);
    }
  onchanged= event =>{
  this.setState({
      [event.target.name]:event.target.value
  });
  }

  submithandler=(e)=>{
      e.preventDefault();
     axios.post('http://localhost:8000/api/addsickers',
       JSON.stringify({
         ID:'123456789',
         Blod:'22334445',
         Allergic:'6677788',
         Chronic:'3445566'
        }),
     )
       .then(response=>{
           //alert(response);
       })
       .catch(err=>{
           alert("catch "+err);
       });
  }
    render(){
    return(
        <div className="justify-content-center">
        <form onSubmit={this.submithandler}>
        <div>
        <input type="text" name="ID"  value={this.state.ID} onChange={this.onchanged} />
        </div>
        <div>
        <input type="text" name="Blod" value={this.state.Blod} onChange={this.onchanged}/>
        </div>
        <div>
        <input type="text" name="Allergic" value={this.state.Allergic} onChange={this.onchanged}/>
        </div>
        <div>
        <input type="text" name="Chronic" value={this.state.Chronic} onChange={this.onchanged}/>
        </div>
        <button type='submit'>click</button>
        </form>
        
        </div>
    )
    }
}
export default Api;