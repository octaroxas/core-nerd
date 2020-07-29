import React from 'react';
import './form.css';

function Form(){
    return(
    <div className="info" >
        <p  className="info">Adicione um item a lista de compras</p>
        <input id="nome" className="entradas" type="text" placeholder="nome do item"></input>
        <input id="valor" className="entradas" type="text" placeholder="valor"></input>
        <input id= "frete" className="entradas" type="text" placeholder="frete"></input>

    </div>

    );
}

export default Form;