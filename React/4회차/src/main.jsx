import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Moodrendering from './Component/MoodRendering'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Moodrendering />
  </StrictMode>,
)
