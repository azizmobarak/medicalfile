import React,{useEffect} from 'react';
import AnimeReact from 'react-animejs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const {Anime}=AnimeReact;

const Home=()=>{
  useEffect(() => {
    return () => {
      Aos.init();
    };
  }, [2000]);
    return(
        <div className="cover h-100 w-100 justify-content-center">
        <div className="row w-100">
        <div className="col-sm-12 justify-content-center">
        <div className="w-100 text-center py-sm-2">
        <h1 id='Box' className="h1 font-weight-bolder py-sm-4" style={{fontSize:80}}>الملف الطبي</h1>
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
        </div>
    )

}

export default Home;