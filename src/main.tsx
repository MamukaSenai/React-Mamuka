import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import DesenvolvedorLogin from './pages/Desenvolvedor/Login'





ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <BrowserRouter>


                  <Routes>
                        <Route path='desenvolvedorLogin' element={<DesenvolvedorLogin/>} />

                  </Routes>


            </BrowserRouter>
      </React.StrictMode>
)