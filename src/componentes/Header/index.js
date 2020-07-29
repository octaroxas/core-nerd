import React from 'react';
import './header.css';
import Logo from './../../assets/img/logo.png';
import Botao from './../Botao';

function Header(){
    return(
      <nav className="Menu">
        <a href="/" >
          <img src={Logo} className="Logo" alt="logo core-nerd"></img>
        </a>

        <Botao className="ButtonLink" href="/">
          New video
        </Botao>
      </nav>
    );
}

export default Header;