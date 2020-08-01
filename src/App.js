import React from 'react';
import './App.css';
import Header from './componentes/Header/index';
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
        videoDescription={"O título responsável pelos surgimento de um novo gênero no mundo dos games, em um mundo medieval fansioso e quase totalmente dominado pela escuridão e névoa e com uma dificuldade amarga, isso é só uma minúscula parte de o que é Demon's Souls a primeira obra do mestre Hidetaka Myiazaki, venha descobrir tudo sobre esse grande marco na história dos videojogos"}
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
