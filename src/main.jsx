import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ModelProvider from './context/ModelContext'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <ModelProvider>
      <App />
    </ModelProvider>
  </BrowserRouter>,
)
