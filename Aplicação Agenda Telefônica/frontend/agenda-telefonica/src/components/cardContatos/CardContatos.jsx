
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import agendaFetch from '../../axios/config'
import { useContato } from '../../contexts/ContatoProvider'


function CardContatos() {

  const {setContatoId, contatoId} = useContato()
  const {setTelefoneId, telefoneId} = useContato()


  const navigate = useNavigate()

  const voltar = () => {

    navigate('/registro') 
  }

  const editarContato = (id, telid) =>{

  
    setContatoId(id)
    setTelefoneId(telid)

    navigate('/editarcontato')
  }

  const deletarContato = (id)=>{

    agendaFetch.delete("/contatos/" + id)

  }

  const [contatos, setContatos] = useState([])

  const getContatos = async () => {

    try {

      const res = await agendaFetch.get("/contatos")

      const dados = res.data

      setContatos(dados)


    } catch (error) {

      console.log(error)


    }


  }

  useEffect(() => {

    getContatos()

  }, [contatos])


  return (
    <div>
      <h1>Lista de Contatos</h1>

      <div>
        {contatos.length === 0 ? "carregando..." : (contatos.map(contato => (

        <div key={contato.id}>
          <h3>{contato.nome}</h3>
          <p>{contato.telefones.map(res => res.numero)}</p>
          <button onClick={()=> editarContato(contato.id, contato.telefones[0].id)}>Editar Contato</button>
          <button onClick={()=> deletarContato(contato.id)}>Deletar Contato</button>
        </div>
      )))}
        

      </div>

      <button onClick={() => voltar()}>Retornar</button>

      


    </div>
  )
}

export default CardContatos