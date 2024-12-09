import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputGroup from './components/InputGroup.jsx'
import EducationForm from './components/Education/EducationForm.jsx'
import PersonalDetail from './components/PersonalDetails/PersonalDetail.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
