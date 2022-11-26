import React, { useState } from "react";
import Nav from "../nav/Nav";
import './Footer.css'
export default function Footer(){
    const [mouse, setMouse] = useState({
        mousx : 0,
        mousy : 0
    }); 
    
    return(
        <section className="footer" onPointerMove={(e)=>{
            // console.log( e.clientX-window.innerWidth/2);
            setMouse((mouse)=> (
                window.innerWidth>700 ? { mousx :(e.clientX-window.innerWidth/2), mousy : (e.clientY-window.innerHeight/2)}:{ mousx :0, mousy :0}
            ));
        }}>
            <div className="waveBox">
                <div>
                    <div className="wave1"></div>
                    <div className="wave2"></div>
                    <div className="wave3"></div>
                </div>
            </div>
            <div className="eyeAni">
                <span className="left"><i style={
                    {marginLeft:mouse.mousx <-55?-55:mouse.mousx ||mouse.mousx >-20?-20:mouse.mousx, 
                     marginTop:mouse.mousy-30 >63?63 : mouse.mousy-30 || mouse.mousy-30 <12?12 : mouse.mousy-30 }
                    
                    }></i></span>
                <span className="right"><i style={
                    {marginLeft:mouse.mousx-50<-55?-55:mouse.mousx-50||mouse.mousx-50>-20?-20:mouse.mousx-50,
                        marginTop:mouse.mousy-30 >63?63 : mouse.mousy-30 || mouse.mousy-30 <12?12 : mouse.mousy-30
                }}></i></span>
            </div>
            <div className="context">
                <p>봐주셔서 감사합니다 :)</p>
                <Nav />
            </div>
        </section>
    )
    
}

