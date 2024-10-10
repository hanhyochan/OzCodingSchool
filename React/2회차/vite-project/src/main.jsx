import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Hello from './component/Hello.jsx'
import Project from './component/project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Hello /> */}
    <Project />
  </StrictMode>,
)
