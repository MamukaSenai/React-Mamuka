import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import Home from '../src/pages/Administrador/Home'
import GestorCriarDemandas from './pages/Gestor/Criar Demandas'
import GestorProjetos from './pages/Gestor/Projetos'
import GestorPerfil from '../src/pages/Gestor/Perfil'
import GestorLogin from './pages/Gestor/Login'
import GestorCriarProjetos from './pages/Gestor/Criar Projetos'
import AdministradorConsulta from './pages/Administrador/Consulta'
import AdministradorLogin from './pages/Administrador/Login'
import CadastroInfosPessoais from './pages/Administrador/CadastroInfosPessoais'
import CadastroInfosCorporativas from './pages/Administrador/CadastroInfosCorporativas'
import CadastroInfosConclusao from './pages/Administrador/CadastroInfosConclusão'
import Desenvolvedorperfil from '../src/pages/Desenvolvedor/Perfil/index'
import DesenvolvedorLogin from './pages/Desenvolvedor/Login'
import Dashboard from './pages/Gestor/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Aside />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="admconclusao" element = {<CadastroInfosConclusao />}/>
      <Route path="admcorporativas" element = {<CadastroInfosCorporativas />}/>
      <Route path="admpessoais" element = {<CadastroInfosPessoais />}/>
      {/* As paginas de login vao ter header e aside? */}
      <Route path="admlogin" element = {<AdministradorLogin />}/> 
      <Route path="admconsulta" element = {<AdministradorConsulta />}/>
      {/* <Route path="admperfil" element = {<AdministradorConsulta />}/> */}
      {/* <Route path="devdemandas" element = {<Dashboard />}/> */}
      <Route path="devlogin" element = {<DesenvolvedorLogin />}/>
      {/* <Route path="devperfil" element = {<Dashboard />}/>   */}
      <Route path="gestorcriardemandas" element = {<GestorCriarDemandas />}/>
      <Route path="gestorcriarprojetos" element = {<GestorCriarProjetos />}/>
      <Route path="dashboard" element = {<Dashboard />}/>
      <Route path="gestorlogin" element = {<GestorLogin />}/>
      {/* <Route path="gestorperfil" element = {<GestorPerfil />}/> */}
      <Route path="gestorprojetos" element = {<GestorProjetos />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)