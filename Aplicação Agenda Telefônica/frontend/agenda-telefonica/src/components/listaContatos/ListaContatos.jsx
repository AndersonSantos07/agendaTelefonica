
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import agendaFetch from '../../axios/config'
import { useContato } from '../../contexts/ContatoProvider'
import './ListaContatos.css'


function ListaContatos() {

  const { setContatoId } = useContato()
  const { setTelefoneId } = useContato()


  const navigate = useNavigate()

  const voltar = () => {

    navigate('/registro')
  }

  const editarContato = (id, telid) => {


    setContatoId(id)
    setTelefoneId(telid)

    navigate('/editarcontato')
  }

  const deletarContato = (id) => {

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
    <div className='container-contatos'>
      <h1 className='headline'>Lista de Contatos</h1>

      <div className='content-card'>
        {contatos.length === 0 ? "carregando..." : (contatos.map(contato => (

          <div key={contato.id} className='card-contatos'>
            <h3>Nome: {contato.nome}</h3>
            <p>Telefones: {contato.telefones.map(res => res.numero)}  </p>
            <div className='container-button'>

              <button onClick={() => editarContato(contato.id, contato.telefones[0].id)}>Editar</button>
              <button onClick={() => deletarContato(contato.id)}>Deletar</button>

            </div>

          </div>
        )))}


      </div>

      <div className='div-button'>
        <p>Deseja cadastrar mais contatos?</p>
        <button onClick={() => voltar()}>Cadastrar Contatos</button>
      </div>





    </div>
  )
}

export default ListaContatos