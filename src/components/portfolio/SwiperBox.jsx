import React from "react";

export default function SwiperBox({name,text,src,image,stsck}){
    const srcUrl = 'https://magracarta.github.io/magracarta'+image;
    return(
            <li className="swiper-slide">
                <div>
                    <a href={src}  target='_blank'>
                        <img src={srcUrl} alt={srcUrl}/>
                    </a>
                    <div className="textbox">
                        <h2>{name}</h2>
                        <p>{text}</p>
                        <div className="stackbox">
                            {stsck.map((stsck,i)=>{
                                return <span key={stsck}>{stsck}</span>
                            })}
                        </div>
                    </div>
                </div>
            </li>
    )
}