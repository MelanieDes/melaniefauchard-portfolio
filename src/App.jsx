import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NotFound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>          
    </BrowserRouter>
  )
}

export default App
