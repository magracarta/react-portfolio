import React, { useState   } from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import MouseEffect from "./components/mouseEffect/MouseEffect";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import './index.css'


function App(){
    return(
        <div className="boxcontainer" >
           <Intro />
           <div className="allNav">
                <Nav />
           </div>
           <div className="bakcground-grd">
                <Aboutme />
                <Resume />
                <Portfolio />
           </div>
           <Footer />

           <MouseEffect/>
        </div>
    )
}

export default App;

window.addEventListener('scroll',()=>{
    let scrollTop = document.querySelector('.allNav').offsetTop;
    if(window.scrollY > scrollTop){
        document.querySelector('.allNav ul').classList.add('fixed');
    }else{
        document.querySelector('.allNav ul').classList.remove('fixed');
    };
});
