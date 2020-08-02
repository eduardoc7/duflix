import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [DadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithVideos) => {
        setDadosIniciais(categoriasWithVideos);
        console.log(categoriasWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {DadosIniciais.length === 0 && (<div>Loading...</div>)}

      {DadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={DadosIniciais[0].videos[1].titulo}
                url={DadosIniciais[0].videos[1].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"        
              />
              <Carousel
                ignoreFirstVideo
                category={DadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}


      {/* <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end?  Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
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
      /> */}
    </PageDefault>
  );
}

export default Home;
