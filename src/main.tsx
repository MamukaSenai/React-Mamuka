import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Administrador/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdministradorConsulta from './pages/Administrador/Consulta'import { BrowserRouter } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import './index.css'
import Dashboard from './pages/Gestor/Dashboard'
import AdministradorLogin from './pages/Administrador/Login'




import CadastroInfosPessoais from './pages/Administrador/CadastroInfosPessoais'
import CadastroInfosCorporativas from './pages/Administrador/CadastroInfosCorporativas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="dashboard" element = {<Dashboard />}/>
    </Routes>
    <Aside />
    </BrowserRouter>
  </React.StrictMode>,
)