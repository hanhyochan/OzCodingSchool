import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
// import App from './App.jsx'
// import Moodrendering from './Component/MoodRendering'
// import RouteTest from './Component/RouteTest'
import Index from './Component/animalIntroduce/Router/Index';

createRoot(document.getElementById('root')).render(
    <Index />
)
