import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Car from './Car.jsx'
import Counter from './Counter.jsx'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Car/>
    <Counter/>
  </StrictMode>,
)
