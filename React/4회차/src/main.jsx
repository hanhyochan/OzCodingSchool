import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
// import App from './App.jsx'
// import Moodrendering from './Component/MoodRendering'
import RouteTest from './Component/RouteTest'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouteTest />
  </BrowserRouter>,
)
