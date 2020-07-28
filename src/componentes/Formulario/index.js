import React from 'react';
import './form.css';

function Form(){
    return(
    <div>
        <p>Adicione um item a lista de compras</p>
        <input className="entradas" type="text" placeholder="nome do item"></input>
        <input className="entradas" type="text" placeholder="valor"></input>
        <input className="entradas" type="text" placeholder="frete"></input>

    </div>

    );
}

export default Form;