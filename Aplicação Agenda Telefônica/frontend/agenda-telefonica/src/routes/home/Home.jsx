import React from 'react'
import './Home.css'

import bannerHome from "../../assets/bannerHome.jpg"
import bannerHome2 from "../../assets/bannerHome2.jpg"

import {useNavigate} from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  const navegarCadastro = ()=>{

    navigate("/registro")
  }


  return (
    <div id="container">

      <div className='content-title'>

        <h1>PersonalAgend</h1>
        <p>Bem-vindo ao nosso site de agenda pessoal! Aqui, você tem o controle total sobre a sua lista de contatos. Crie uma agenda personalizada para organizar todos os seus contatos de forma simples e eficiente. Adicione, edite e atualize informações de amigos, familiares e colegas de trabalho com facilidade. Nunca mais perca um número de telefone ou endereço importante. Sua agenda pessoal está a apenas alguns cliques de distância. Comece a organizar sua vida hoje!</p>

      </div>

      <div className='content-cadastrar'>
        <h2>Cadastre seus contatos</h2>
        <p>Clique no botão e comece agora a cadastrar seus contatos!</p>
        <button onClick={()=> navegarCadastro()}>Cadastrar Contatos</button>
      </div>


      <h2 id="sobre">Sobre o Projeto</h2>
      <div id="container-content">
        <div>

        </div>

        <div className='container-sobre'>
          <div id="container-bannerHome">
            <img id="bannerHome" src={bannerHome} alt="banner" />
          </div>

          <div className='container-sobre'>

            <div className='content-sobre'>
              <h3>backend</h3>

              <p>O projeto de agenda telefônica é uma aplicação web desenvolvida com o objetivo de facilitar a organização e o gerenciamento de contatos e números de telefone. Para alcançar esse objetivo, implementei duas tabelas principais: uma tabela de contatos e uma tabela de telefones, que estão interligadas por meio de um relacionamento no banco de dados.
                O backend da aplicação foi construído utilizando tecnologias robustas, incluindo MySQL como sistema de gerenciamento de banco de dados e Java com Spring Boot como a linguagem principal do lado do servidor. Essa escolha de tecnologia nos proporcionou um ambiente de desenvolvimento eficiente e escalável, permitindo a implementação de todas as operações de CRUD (Create, Read, Update e Delete) de forma simples e segura.
                Através da nossa aplicação, os usuários podem adicionar, visualizar, editar e excluir contatos, bem como associar números de telefone a esses contatos de maneira intuitiva. Além disso, oferecemos funcionalidades de pesquisa e filtragem para facilitar a localização de contatos específicos, tornando a agenda telefônica uma ferramenta valiosa para a organização pessoal e profissional.
                Estou orgulhoso de ter desenvolvido essa aplicação que simplifica a gestão de contatos e números de telefone, e espero que ela seja útil para diversos tipos de usuários. O nosso compromisso é manter a aplicação atualizada e em constante evolução, buscando sempre atender às necessidades dos nossos usuários.</p>


            </div>

          </div>

        </div>

        <div className='container-sobre2'>

          <div >
            <img id="bannerHome2" src={bannerHome2} alt="banner" />
          </div>


          <div className='container-sobre'>
            <div className='content-sobre'>

              <h3>frontend</h3>
              <p>No frontend da aplicação, adotamos o React como a principal biblioteca de desenvolvimento, permitindo a construção de interfaces de usuário dinâmicas e responsivas. Além disso, utilizamos o React Router DOM para a navegação entre diferentes páginas da aplicação, garantindo uma experiência de usuário fluida e organizada
                Para a integração com o backend, empregamos a biblioteca Axios, que facilita o consumo de dados da API que desenvolvemos no servidor. Isso permite que os dados dos contatos e números de telefone sejam carregados e atualizados de forma síncrona e eficaz, garantindo que a aplicação esteja sempre atualizada com as informações mais recentes do banco de dados.
                A combinação dessas tecnologias no frontend e no backend nos permite oferecer aos usuários uma aplicação de agenda telefônica completa, com funcionalidades de adicionar, visualizar, editar e excluir contatos, além de associar e gerenciar números de telefone de forma simples e eficaz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home