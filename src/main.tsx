import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'



import './index.css'
import GestorCriarProjetos from './pages/Gestor/Criar Projetos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='gestorCriarProjetos' element={ <GestorCriarProjetos/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
