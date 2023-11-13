import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { AnimatePresence } from 'framer-motion';
import Project from './Pages/Project';
import Projects from './Pages/Projects';
import Mouse from './Components/Mouse';
import Navigation from './Components/Navigation';
import SocialNetWork from './Components/SocialNetWork';



function App() {
 

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Mouse />
        <Navigation />
        <SocialNetWork />
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
  )
}

export default App
