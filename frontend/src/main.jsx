import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import './style.css'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import Registration from './components/registration/Registration'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registration />
  </StrictMode>,
)