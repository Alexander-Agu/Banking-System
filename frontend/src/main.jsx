import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from './component/header/Header'
import Hero from './component/hero/Hero'
import LogIn from './component/login/LogIn'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <LogIn />
  </StrictMode>,
)