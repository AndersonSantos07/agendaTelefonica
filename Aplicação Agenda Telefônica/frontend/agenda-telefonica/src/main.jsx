import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registro from './routes/registro/Registro.jsx'
import Pesquisa from './routes/pesquisa/Pesquisa.jsx'
import EditarContato from './components/editarContato/EditarContato.jsx'
import { ContatoProvider } from './contexts/ContatoProvider.jsx'
import Home from './routes/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/footer.jsx'
import ListaContatos from './components/listaContatos/ListaContatos.jsx'

const router = createBrowserRouter([
  {
    element:
      <ContatoProvider>
        <Navbar />
        <App />
        <Footer />
      </ContatoProvider>
    ,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/registro",
        element: <Registro />
      },
      {
        path: "/pesquisa",
        element: <Pesquisa />
      },
      {
        path: "/listacontatos",
        element: <ListaContatos />
      },
      {
        path: "/editarcontato",
        element: <EditarContato />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
