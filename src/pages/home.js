import React from 'react';

export default class Home extends React.Component{



render(){
    return(
        <div className="cover h-100 w-100 justify-content-center">
        <div className="row w-100">
        <div className="col-sm-12 justify-content-center">
        <div className="w-100 text-center py-sm-2">
        <h1 className="h1 font-weight-bolder py-sm-4" style={{fontSize:80}}>الملف الطبي</h1>
        <p className="text-body h4">يمكنكم ايداع تسجيلكم بالملف الطبي الان بامان وخصوصية تامة للمزيد حول الملف الطبي ودوره </p>
        <br/>
        <button className="btn btn-primary">التعريف بالملف الطبي</button>
        </div><br/>
        <div className="justify-content-center text-center">
        <button className="btn btn-success font-weight-bolder w-25">!قم بالتسجيل الان</button>
        </div>
        <div className="justify-content-center text-center py-sm-5">
        <h2>تعرف على تطبيق توعية وقم بتحميله للوقاية من فيروس كورونا</h2><br/>
        <button className="btn btn-info py-sm-3">القي نظرة وحمل تطبيق توعية</button>
        </div>
        </div>
        </div>
        <br/>
        <div style={{marginLeft:"12%"}} className=" row w-75 ">
        <div className="col-sm-4 text-xl-center">
        <div className="card w-100">
         <div className="card-title bg-dark text-white">
           Title 1
         </div>
         <div className="card-body">
          this is body
         </div>
        </div>
        <br/>
        </div>
        <div className="col-sm-4 text-xl-center">
        <div className="card w-100">
        <div className="card-title bg-dark text-white">
          Title 1
        </div>
        <div className="card-body">
         this is body
        </div>
       </div>
       <br/>
        </div>
        <div className="col-sm-4 text-xl-center">
        <div className="card w-100">
        <div className="card-title bg-dark text-white">
          Title 1
        </div>
        <div className="card-body">
         this is body
        </div>
       </div>
       <br/>
        </div>
        </div>
        </div>
    )
}

}