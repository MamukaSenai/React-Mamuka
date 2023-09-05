import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import gestorCriarProjetos from './pages/Gestor/Criar Projetos'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='gestorCriarProjetos' element={ < gestorCriarProjetos/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
