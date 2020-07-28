import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/index';
import Form from './componentes/Formulario';
import Botao from './componentes/Botao';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Botao/>

    </div>
  );
}

export default App;
