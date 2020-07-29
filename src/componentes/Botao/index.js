import React from 'react';
import './botao.css';

function Botao(props){
    return (
        <a href={props.href} className={props.className} >
            {props.children}
        </a>
        
    );
}

export default Botao;