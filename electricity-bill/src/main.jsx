import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ElectricityBill from './Electricity.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElectricityBill />
  </StrictMode>,
)
