import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './index.css'
import GestorProjetos from './pages/Gestor/Projetos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='gestorProjetos' element={ <GestorProjetos/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
