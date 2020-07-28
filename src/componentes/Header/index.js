import React from 'react';
import './header.css';
import Logo from './../../assets/img/logo.png';

function Header(){
    return(
      <header className="fundo">
        <img src={Logo} className="logo" alt="logo core-nerd"></img>
      </header>
      

    );
}

export default Header;