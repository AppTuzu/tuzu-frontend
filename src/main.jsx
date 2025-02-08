import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ModelProvider from './context/ModelContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ModelProvider>
      <App />
    </ModelProvider>
  </BrowserRouter>,
)
