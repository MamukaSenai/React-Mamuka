import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import Header from './components/Header'

=======
import Aside from './components/Aside'
import Header from './components/Header'
>>>>>>> aside
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <Header />
=======
      <Header />
    <Aside />
>>>>>>> aside
    </BrowserRouter>
  </React.StrictMode>,
)
