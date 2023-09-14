import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import Login from './pages/Administrador/Login'





ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <BrowserRouter>


                  <Routes>
                        <Route path='/' element={<Login />} />

                  </Routes>


            </BrowserRouter>
      </React.StrictMode>
)







