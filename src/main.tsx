import React from 'react'
import ReactDOM from 'react-dom/client'
import GestorCriarDemandas from './pages/Gestor/Criar Demandas'


import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='gestorCriarDemandas' element={<GestorCriarDemandas/>}/>
      
      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>,
)
