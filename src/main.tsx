import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdministradorConsulta from './pages/Administrador/Consulta'
import './index.css'
import Aside from './components/Aside'
import Header from './components/Header'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Aside />
    <Routes>
      <Route path='admconsulta' element = {<AdministradorConsulta />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
