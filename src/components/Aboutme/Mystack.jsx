import React , {useEffect, useState}from "react";

export default function Mystack(){
    const [mystack, setMystack] = useState([]);
    
    useEffect(()=>{
        fetch('data/Stack.json')
        .then((res)=> res.json())
        .then((data)=>{
            setMystack(data);
        })
    },[])
    return(
        <>
            <ul>
                {
                    mystack.map((stack)=>{
                        const src= `https://magracarta.github.io/magracarta${stack.src}`
                        return    <li key = {stack.id}>
                            <img src={src} alt={src}/>
                            <p>
                            {stack.name}
                            </p>
                            </li>
                    })
                }    
            </ul>        
        </>
    )
}

