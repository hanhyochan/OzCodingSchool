import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Counter from './Component/Counter.jsx'
// import Update from './Component/Update.jsx'
import TodoList from './Component/TodoList.jsx'

createRoot(document.getElementById('root')).render(

    <TodoList />

)
