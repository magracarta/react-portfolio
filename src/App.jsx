import React from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Resume from "./components/resume/Resume";
import './index.css'


function App(){
    return(
        <div className="boxcontainer">
           <Intro />
           <div className="allNav">
                <Nav />
           </div>
           <div className="bakcground-grd">
                <Aboutme />
                <Resume />
           </div>
        </div>
    )
}

export default App;