import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Signup from "./pages/Signup.jsx"
import About from "./pages/About.jsx"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
