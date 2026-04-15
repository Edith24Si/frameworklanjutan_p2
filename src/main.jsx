import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServiceApp from './tugasPertemuan-4/ServiceApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <ServiceApp />
    </>
  </StrictMode>,
)