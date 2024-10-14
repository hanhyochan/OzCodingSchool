import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Parents from './Components/Parents'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parents />
  </StrictMode>,
)
