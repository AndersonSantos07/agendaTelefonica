import React from 'react'
import {useNavigate} from 'react-router-dom'



function Pesquisa() {

  const navigate = useNavigate()

  const handleContatos = () =>{

    navigate("/cardcontatos")

  }

  return (
    <div>
        <h2>Pesquisa de Contatos</h2>

       <p>Deseja ver sua lista de contatos?</p> 
       <button onClick={handleContatos}>Contatos</button>
      

    </div>
  )
}

export default Pesquisa