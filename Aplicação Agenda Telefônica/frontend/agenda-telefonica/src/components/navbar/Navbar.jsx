import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='cabecalho'>
      <header>
        <nav>
          <ul>
            <div className='logo'>
              <li><Link to="/">PersonalAgend</Link></li>
            </div>
            <div className='menu-content'>
            <li><Link to="/registro">Cadastrar Contato</Link></li>
            <li><Link to="/pesquisa">Pesquisar Contatos</Link></li>
            <li><Link to="/cardcontatos">Listar Contatos</Link></li>
            </div>
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default Navbar