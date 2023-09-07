import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'



import './index.css'
import CadastroInfosConclusao from './pages/Administrador/CadastroInfosConclusão'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='cadastroInfosConclusao' element={ <CadastroInfosConclusao/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)