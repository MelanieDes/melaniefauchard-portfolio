import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Project from './Pages/Project';


function App() {
 

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Project/:id' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />        
          <Route path='/NotFound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes> 
      </AnimatePresence>         
    </BrowserRouter>
  )
}

export default App
