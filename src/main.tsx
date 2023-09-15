import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import DesenvolvedorDemandas from './pages/Desenvolvedor/Demandas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="tabela" element = {<DesenvolvedorDemandas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
