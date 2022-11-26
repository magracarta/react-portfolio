import React from "react";
import NavButton from './NavButton';


export default function Nav(){

    return(
        <ul>
            <NavButton name='About Me' src='about' />
            <NavButton name='Resume' src='resume'/>
            <NavButton name='My PortFolio' src='portfolio' />
        </ul>
    )
}