import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CounterApp } from './components/counter.component'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterApp value={20}></CounterApp>
  </React.StrictMode>
)
