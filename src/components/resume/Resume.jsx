import React, {useState,useEffect} from "react";
import styles from './Resume.module.css';
import ResumeBox from "./ResumeBox";

export default function Resume(){
    const [resume, seResume]= useState([]);
    useEffect(()=>{
        fetch('data/Resume.json')
        .then((res)=> res.json())
        .then((data)=> seResume(data))
    },[]);
    const recount = Math.ceil(resume.length/5);
    const array = Array.from({length:recount}, (v,i)=>i);
    return(
        <section className={styles.resume}>
            <div className="inner1200">
                <h3 className="title">Resume</h3>
                <div className={styles.resumeContainer}>
                    <div>
                        {array.map((i)=>{
                           return <ResumeBox key={i} resume = {resume} length={i==0? 5 : i*5+5 } start={i==0? 0 : i*5 }/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}