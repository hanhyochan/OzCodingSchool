import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './component/Count.jsx'

createRoot(document.getElementById('root')).render(
    <Count />
)
