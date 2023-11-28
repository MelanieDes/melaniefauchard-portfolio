import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { AnimatePresence } from 'framer-motion';
import Project from './Pages/Project';
import Projects from './Pages/Projects';

function App() {
 return (
    
    <BrowserRouter>    
      <AnimatePresence>       
        <Routes>        
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />          
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Project/:id' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />        
          <Route path='/NotFound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes> 
      </AnimatePresence>         
    </BrowserRouter>
  );
}

export default App;
