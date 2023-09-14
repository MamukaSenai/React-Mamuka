import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import EnhancedTable from './pages/Desenvolvedor/Demandas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="tabela" element = {<EnhancedTable />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
