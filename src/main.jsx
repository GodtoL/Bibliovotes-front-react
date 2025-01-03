import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import MainSection from './MainSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <MainSection></MainSection>
  </StrictMode>,
)
