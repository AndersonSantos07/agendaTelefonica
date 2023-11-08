import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import agendaFetch from '../../axios/config'
import './Pesquisa.css'



function Pesquisa() {

  const [contatos, setContatos] = useState()


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




  const navigate = useNavigate()

  const handleContatos = () => {

    navigate("/listacontatos")

  }

  return (
    <div className='container'>
      <h2>Pesquisa de Contatos</h2>

      <div>
        <label htmlFor="nomePesquisa">
          <span>Pesquisar por nome:</span>
          <input type="text" name='nomePesquisa' id='nomePesquisa' />
        </label>

        <div>
            <p>Nome: Anderson</p>
            <p>Telefone: 11909230923</p>
        </div>
      </div>

      <div>
        <label htmlFor="telefonePesquisa">
          <span>Pesquisar por telefone:</span>
          <input type="text" name='telefonePesquisa' id='telefonePesquisa' />
        </label>

        <div>
            <p>Nome: Anderson</p>
            <p>Telefone: 11909230923</p>
        </div>
      </div>

      <div>

        <p>Deseja ver sua lista de contatos?</p>
        <button onClick={handleContatos}>Contatos</button>

      </div>



    </div>
  )
}

export default Pesquisa