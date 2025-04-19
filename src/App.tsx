import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { Navegacion } from './paginas/navegacion/navegacion.tsx'
import { Principal } from './paginas/principal/principal.tsx'
import { Publicaciones } from './paginas/publicaciones/publicaciones.tsx'

function App() {

  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
          <Route path='/' element={<Navigate to='pagina-principal'/>}/>
          <Route path='/pagina-principal' element={<Principal/>}/>
          <Route path="/pagina-principal/:id" element={<Publicaciones/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
