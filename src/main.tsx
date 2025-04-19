import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VariablesContexto } from './contexto/contexto.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VariablesContexto>
      <App />
    </VariablesContexto>
  </StrictMode>,
)
