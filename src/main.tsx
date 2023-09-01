import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Gestor/Header'
import gestorCriarDemandas from './pages/Gestor/Criar Demandas'
import gestorCriarProjetos from './pages/Gestor/Criar Projetos'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes>
      <Route path='gestorCriarDemandas' element={<gestorCriarDemandas/>}/>
      <Route path='gestorCriarProjetos' element={< gestorCriarProjetos />} />
    </Routes>
  </React.StrictMode>,
)
