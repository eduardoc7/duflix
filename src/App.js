import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import DadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu /> 

      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />
      <Carousel
        category={DadosIniciais.categorias[1]}
      />
      <Carousel
        category={DadosIniciais.categorias[2]}
      />      
      <Carousel
        category={DadosIniciais.categorias[3]}
      />      
      <Carousel
        category={DadosIniciais.categorias[4]}
      />      
      <Carousel
        category={DadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
