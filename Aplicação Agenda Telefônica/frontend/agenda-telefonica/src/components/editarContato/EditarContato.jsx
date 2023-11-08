import React from 'react'
import agendaFetch from '../../axios/config'
import { useState } from 'react'
import { useContato } from '../../contexts/ContatoProvider'
import {useNavigate} from 'react-router-dom'

function EditarContato() {

    const navigate = useNavigate()

    const {contatoId} = useContato()
    const {telefoneId} = useContato()

    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [numero, setNumero] = useState()

    const atualizarContato = async (e) => {

        e.preventDefault()

        const contato ={
            id: contatoId,
            nome,
            idade
        }

        const telefone = {
            id: telefoneId,
            numero,
            contatos:{
                id: contatoId
            }
        }


        agendaFetch.put("/contatos", contato)
        agendaFetch.put("/telefones", telefone)

    }

    const handleLista = ()=>{

        setTimeout(()=>{

            navigate("/cardcontatos")

        },1000)

    }

  return (
    <div>
        <h2>Atualize o Contato </h2>

        <form onSubmit={(e)=> atualizarContato(e)}>
            <label htmlFor="nome">
            <span>Nome:</span>
                <input type="text" name="nome" id="nome" onChange={(e)=> setNome(e.target.value)}/>
            </label>
            
            <label htmlFor="idade">
                <span>Idade:</span>
                <input type="number" name="idade" id="idade" onChange={(e)=> setIdade(e.target.value)}/>
            </label>
            <label htmlFor="telefone">
                <span>Telefone:</span>
                <input type="text" name="telefone" id="telefone" onChange={(e)=> setNumero(e.target.value)}/>
            </label>
            <button onClick={()=>handleLista()} type='submit'>Cadastrar</button>


        </form>
    </div>
  )
}

export default EditarContato