import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FruitProvider } from './context/FruitContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FruitProvider>
    <App />
  </FruitProvider>


)
