import React,{useEffect} from 'react';
import ReactAnime from 'react-animejs';
const {Anime, stagger} = ReactAnime;
//import 'aos/dist/aos.css';


 const test =(props)=>{

return(
    <div>
    <br/>
    <Anime
    initial={[
       {
        targets: '#Box',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      }
     ]}
    >
   <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} >HEllo</div>
   </Anime>
   <br/>
   <div data-aos="fade-left" style={{width:"200px",height:"40px"}}>
        <button className="btn btn-success font-weight-bolder w-25">!قم بالتسجيل الان</button>
    </div>
        <br/>
    </div>
)

}
export default test;