import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'



import './index.css'
import CadastroInfosCorporativas from './pages/Administrador/CadastroInfosCorporativas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route/>
          <Route path='cadastroInfosCorporativas' element={ <CadastroInfosCorporativas/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)