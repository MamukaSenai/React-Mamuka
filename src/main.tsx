import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gestorperfil from '../src/pages/Gestor/Perfil/index'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>


      <Routes>
        <Route path='gestorperfil' element={<Gestorperfil />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
