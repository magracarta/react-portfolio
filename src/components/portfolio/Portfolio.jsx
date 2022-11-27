import React, {useEffect, useState} from "react";
import  './Portfolio.css'
import SwiperBox from "./SwiperBox";


export default function Portfolio(){
    const [mypf,setMypf] =useState([]);
    useEffect(()=>{
        fetch('data/PortFolio.json')
        .then((res)=> res.json())
        .then((data)=> setMypf(data))
        
    },[]);
    
    return(
        <div className='portFolio' id='portfolio'>
                <h3 className="title">My PortFolio</h3>
                <p className="subTitle">2년동안 작업해온<br className="br" />저의 포트폴리오를 보여 드리겠습니다.</p>
                <div className="swiper mySwiper pfBox">
                    <ul className="swiper-wrapper">
                        {mypf.map((slide,i)=>{
                            return  <SwiperBox 
                            key={slide.name} 
                            name={slide.name} 
                            text={slide.text} 
                            src={slide.src} 
                            image={slide.image}
                            stsck = {slide.stsck}
                            />
                        })}

                    </ul>
                    
                </div>
        </div>
    )
}

// window.onload =()=>{
    setTimeout(()=>{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.5,
            spaceBetween: 20,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              grabCursor: true,
            centeredSlides: true,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            breakpoints: {
                1200:{
                    slidesPerView: 5.6,
                    spaceBetween: 20,
                }
            }
          });
        
    },500);
// }

