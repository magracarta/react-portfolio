import React from "react";
import Decoration from "./Decoration";
import styles from './Intro.module.css'
import myPhoto from './img/myPhoto.png'
import Nav from "../nav/Nav";

export default function Intro(){

    return(
        <section className={styles.decoContainer}>
            <div className={styles.myProfile}>
                <img src={myPhoto} alt={myPhoto}/>
                <h2>HELLO! I’m Minju</h2>
                <p>디자인과 개발 모두 가능한 디발자 김민주 입니다.</p>
                <div className={styles.navigation}>
                    <Nav />
                </div>
                <div className={styles.mouseAni}>
                    <span><i></i></span>
                    <p>SCROLL</p>
                </div>
            </div>
            <div className={styles.decoration}>
                <div>
                    <Decoration name='deco1' />
                </div>
            </div>
        </section>
           
    )
}