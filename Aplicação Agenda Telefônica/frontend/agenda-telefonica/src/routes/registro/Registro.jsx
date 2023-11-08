import React from 'react';
import agendaFetch from '../../axios/config';
import { useState } from 'react';
import './Registro.css';
import { useNavigate } from 'react-router-dom';

function Registro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [numero, setNumero] = useState('');

    const criarContato = async (e) => {
        e.preventDefault();

        const contato = {
            nome,
            idade,
        };
        await agendaFetch.post('/contatos', contato);
        const resContatoCriado = await agendaFetch.get('contatos/nome/' + contato.nome);
        const idContatoCriado = resContatoCriado.data[0].id;

        const telefone = {
            numero,
            contatos: {
                id: idContatoCriado,
            },
        };

        await agendaFetch.post('/telefones', telefone);
    }

    const handleLista = () => {
        setTimeout(()=>{
            navigate('/pesquisa');
        },1000)
        
    }

    return (
        <div className="container">
            <div className='content-headline'>
                <h2>Cadastrar Contato</h2>
            </div>

            <form onSubmit={(e) => criarContato(e)} className='form'>
                <div className='content-input'>
                    <label htmlFor="nome">
                        <span>Nome</span>
                        <input placeholder="Digite o Nome do Contato" type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} />
                    </label>
                </div>

                <div className='content-input'>
                    <label htmlFor="idade">
                        <span>Idade</span>
                        <input placeholder="Digite a idade do Contato" type="number" name="idade" id="idade" onChange={(e) => setIdade(e.target.value)} />
                    </label>
                </div>

                <div className='content-input'>
                    <label htmlFor="telefone">
                        <span>Telefone</span>
                        <input placeholder="Digite o Telefone do Contato" type="text" name="telefone" id="telefone" onChange={(e) => setNumero(e.target.value)} />
                    </label>
                </div>
                 

                <button onClick={handleLista} type="submit">Cadastrar</button>

        
               
            </form>
        </div>
    );
}

export default Registro;
