import React from "react";
import styles from './Aboutme.module.css';
import Dacoration from "./Dacoration";
import Mystack from "./Mystack";


export default function Aboutme(){

    return(
        <section className={styles.about}>
            <Dacoration />
            <div className="inner1200">
                <h3 className="title">안녕하세요, 저는 디발자 김민주 입니다 :)</h3>
                <p className="subTitle">
                저는 지금 프로덕트 파트에서 UX UI 디자인과 퍼블리싱을 맡고 있습니다.<br/>
                사용하는 언어는 javascript 이고 자신있는 분야는 인터렉티브 디벨롭 입니다.
                <br/><br/>
                현재 리액트를 공부하고 있습니다.
                </p>

                <div className={styles.stackBox}>
                    <span>MY STACK</span>
                    <Mystack />
                    <a className={styles.gitBtn} href='https://github.com/magracarta'>
                        <img src='https://magracarta.github.io/magracarta/img/githubIcon.png' alt='git' /> 
                        &nbsp;&nbsp;MY GITHUB &nbsp;
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928931C10.9526 0.538407 10.3195 0.538407 9.92893 0.928931C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z" fill="white"/>
                    </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}