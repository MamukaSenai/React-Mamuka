import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import './index.css'
import CadastroInfosCorporativas from './pages/Administrador/CadastroInfosCorporativas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    <Aside />
    </BrowserRouter>
  </React.StrictMode>,
)