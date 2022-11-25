import React, {useRef} from "react";
import NavButton from './NavButton';


export default function Nav(){

    return(
        <ul>
            <NavButton name='About Me' />
            <NavButton name='Resume' />
            <NavButton name='My PortFolio' />
        </ul>
    )
}