import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Pakai satu titik saja karena filenya satu folder
import ServiceApp from './ServiceApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServiceApp/>
  </React.StrictMode>
)