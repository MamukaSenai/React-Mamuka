import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import './index.css'
import Dashboard from './pages/Gestor/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="dashboard" element = {<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
