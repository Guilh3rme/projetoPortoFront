import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import { createMemoryRouter, MemoryRouter, Route, RouterProvider } from 'react-router-dom'
import Routes from './pages/Routes.jsx'

const router = Routes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)