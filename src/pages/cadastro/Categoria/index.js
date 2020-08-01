import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  // desestruturação de um array:
  // pois, o useState é uma função que retorna duas coisas:
  // 1 - o próprio valor inicial
  // 2 - a função 'set' que irá alterar esse valor quando for chamada
  const [values, setValues] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  }

  function handleChange(event) {
    const { value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://duflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Show',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra Show',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 1 * 1000);
  }, [

  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(initialValues);
      }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div><br/>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
