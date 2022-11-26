import React from "react";

export default function NavButton({name ,src}){
    return(
        <li><a href={`#${src}`}>{name}</a></li>
    )
}