import React from 'react';

export default class Home extends React.Component{



render(){
    return(
        <div className="cover h-100 w-100 justify-content-center">
        <div className="nav nav-pills justify-content-center  bg-dark">
        <ul className="nav">
        <li className="nav-item"><a className="nav-link text-white" href="/medicalfile">الملف الطبي</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/about">القوانين</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#">تحميل تطبيق الهاتف</a></li>
        </ul>
        </div>
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
        </div>
    )
}

}