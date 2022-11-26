import React from "react";
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, {css} from "styled-components";

const Container = styled.div`
    displya: flex;
`;

const Button = styled.button`
    background: transparent;
    border-radius:3px;
    border:2px solid #3c5b69;
    color:#b9eaff;
    margin:0 1em;
    padding:0.25em 1em;
    ${(props)=>
        props.primary &&
        css`
        background : #009cd5;
        color:#fff;
        `};
`;

function App(){
    
    return(
        <>
            <Button1 />
            <Button2 />
            <Container>
                <Button>Nomal Button</Button>
                <Button primary>primary Button</Button>
            </Container>
        </>
    )
}

export default App;