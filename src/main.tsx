import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// import App from './App'
import { BrowserRouter, Routes } from 'react-router-dom'
import Perfil from '../src/pages/Desenvolvedor/Perfil/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <BrowserRouter>

  </React.StrictMode>,

      <Routes>
        <Routes path='perfil/:idUsuario' element={ <Perfil /> } />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
