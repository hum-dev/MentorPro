import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero/Hero'

import Login from './components/Account/Login/Login'
import SignUp from './components/Account/SignUp/SignUp'
import Footer from './components/Footer/Footer'
import Testimonial from './pages/Testimonials/Testimonial'







function App() {
  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path="/" element={<Hero />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Testimonial" element={<Testimonial/>} />


        </Routes>
       
        <> 
        
        </>
       
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
