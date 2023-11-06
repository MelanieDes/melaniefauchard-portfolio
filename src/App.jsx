import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Projet1 from './Pages/Projet1';
import Projet2 from './Pages/Projet2';
import Projet3 from './Pages/Projet3';
import Projet4 from './Pages/Projet4';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projet-1' element={<Projet1 />} />
        <Route path='/projet-2' element={<Projet2 />} />
        <Route path='/projet-3' element={<Projet3 />} />
        <Route path='/projet-4' element={<Projet4 />} />        
        <Route path='/NotFound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>          
    </BrowserRouter>
  )
}

export default App
