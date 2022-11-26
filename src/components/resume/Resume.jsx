import React, {useState,useEffect, useRef} from "react";
import styles from './Resume.module.css';
import ResumeBox from "./ResumeBox";

export default function Resume(){
    const [resume, seResume]= useState([]);
    const [height, setHeight] = useState(false);
    useEffect(()=>{
        fetch('data/Resume.json')
        .then((res)=> res.json())
        .then((data)=> seResume(data))
    },[]);
    const recount = Math.ceil(resume.length/5);
    const array = Array.from({length:recount}, (v,i)=>i);
    const moreClick = ()=>{
        setHeight(true);
    }
    return(
        <section className={styles.resume} id='resume'>
            <div className="inner1200">
                <h3 className="title">Resume</h3>
                <div className={`${styles.resumeContainer} ${height==true? styles.open : 'no'}`} style={{height:height==true? 'auto' : 280}}>
                    <div>
                        {array.map((i)=>{
                           return <ResumeBox key={i} resume = {resume} length={i==0? 5 : i*5+5 } start={i==0? 0 : i*5 }/>
                        })}
                    </div>
                </div>
                <a className={styles.moreBtn} style={{display:height==true? 'none' : 'inline-block'}} onClick={moreClick}>더보기</a>
            </div>
        </section>
    )
}