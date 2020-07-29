import React from 'react';
import './App.css';
import Header from './componentes/Header/index';
import Form from './componentes/Formulario';
import Botao from './componentes/Botao';
import BannerMain from '../src/componentes/BannerMain';
import Corousel from '../src/componentes/Carousel';
import Footer from '../src/componentes/Footer';
import dadosIniciais from '../src/data/dados_iniciais.json';


function App() {
  return (
    <div className="App">
      <Header/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Corousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Corousel
        category={dadosIniciais.categorias[1]}
      />

      <Corousel
        category={dadosIniciais.categorias[2]}
      />      

      <Corousel
        category={dadosIniciais.categorias[3]}
      />      

      <Corousel
        category={dadosIniciais.categorias[4]}
      />      

      <Corousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default App;
