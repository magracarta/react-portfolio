import React from "react";

export default function ResumeBox({resume , length , start}){
    return(
        <ul>
            {resume.map((itm,i)=>{
                if( start <= i && i < length){
                    return (
                        <li key={itm.date}>
                            <span>{itm.date}</span>
                            <h1>{itm.title}</h1>
                            <p>{itm.text}</p>
                        </li>   
                    )
                }
            })}
        </ul>
    )
}