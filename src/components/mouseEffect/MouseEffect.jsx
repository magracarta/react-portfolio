import React, { useEffect, useState } from "react";

export default function MouseEffect(){
    
    // mouseEvent();
    return(
        <>
            <div className="mouseMove">
                
            </div>
        </>
    )
}
if(window.innerWidth > 700){
    let movex =0;
    let movey =0;
    const cname = ['left','right'];
    const mousearray = ['Ellipse 2.svg','Ellipse 3.svg','Polygon 3.svg','Rectangle 4.svg'];
    const mouseEvent = (e)=>{
        setInterval(()=>{
            creative();
        },Math.random()*(500-100)+100);
    }

    window.addEventListener('mousemove',(e)=>{
        movex = e.clientX
        movey =  e.clientY
    });

    function creative(){
        const deco = document.createElement('div');
            const img = Math.floor(Math.random()*(4));
            const cnameRd = Math.floor(Math.random()*2);
            deco.classList='mouseDeco';
            deco.classList.add(cname[cnameRd]);
            deco.style.backgroundImage = `url('https://magracarta.github.io/magracarta/img/${mousearray[img]}')`;
            deco.style.left =movex+0+'px';
            deco.style.top =movey-0+'px';
            document.querySelector('.mouseMove').appendChild(deco);

            setTimeout(()=>{
                deco.remove();
            },1300);
    }
    mouseEvent();
    setTimeout(mouseEvent,1000);
}