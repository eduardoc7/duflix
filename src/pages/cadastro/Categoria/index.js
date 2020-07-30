import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default function CadastroCategoria(){

    const initialValues = {
        nome: '',
        descricao: '',
        cor: '',
    }

    // desestruturação de um array:
    // pois, o useState é uma função que retorna duas coisas:
    // 1 - o próprio valor inicial
    // 2 - a função 'set' que irá alterar esse valor quando for chamada
    const [values, setValues] = useState(initialValues);
    const  [categorias, setCategorias] = useState([])

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value, //nome: 'valor'
        })
    }

    function handleChange(event){
        const { value } = event.target;
        setValue(
            event.target.getAttribute('name'),
            value
        )
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            
            <form onSubmit={function handleSubmit(e){
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
                setValues(initialValues)
            }}>
                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="nome" 
                    value={values.nome}
                    onChange={handleChange}
                />
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <FormField
                    label="Cor: "
                    type="color"
                    name="cor" 
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={categoria, indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}
