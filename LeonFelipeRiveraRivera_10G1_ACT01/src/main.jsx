import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AlumnosApp } from './components/alumnos.component'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AlumnosApp></AlumnosApp>
  </React.StrictMode>
)
