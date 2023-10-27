import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaLogin } from './pages/PaginaLogin';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import { PaginaAdmin } from './pages/PaginaAdmin';
import { PaginaUsuarioRegular } from './pages/PaginaUsuarioRegular';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<PaginaLogin/>}/>
        <Route path="/admin" element={<PaginaAdmin/>}/>
        <Route path="/usuario-regular" element={<PaginaUsuarioRegular/>}/>
      </Routes>
      <Toaster></Toaster>
    </BrowserRouter>
  )
}

export default App;