import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
// import App from './App.jsx'
// import Moodrendering from './Component/MoodRendering'
// import RouteTest from './Component/RouteTest'
import MainPage from './Component/animalIntroduce/mainPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
)
