import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'



import './index.css'
import CadastroInfosPessoais from './pages/Administrador/CadastroInfosPessoais'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='cadastroInfosPessoais' element={ <CadastroInfosPessoais/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)