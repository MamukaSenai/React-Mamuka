import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import GestorLogin from './pages/Gestor/Login'





ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <BrowserRouter>


                  <Routes>
                        <Route path='gestorLogin' element={<GestorLogin />} />

                  </Routes>


            </BrowserRouter>
      </React.StrictMode>
)