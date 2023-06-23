import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero/Hero'

import Login from './components/Account/Login/Login'
import SignUp from './components/Account/SignUp/SignUp'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Testimonial from './pages/Testimonials/Testimonial'
import About from './pages/About/About'
import FaQ from './pages/FAQ/FAQ'
import Contact from './pages/ContactUs/Contact'
import NotFound from './pages/NotFound/NotFound'
import Mentor from './components/Mentor/MentorsData'
import Mentee from './components/Mentee/MenteeData'







function App() {
  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path="/" element={<Hero />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/FaQ" element={<FaQ/>} />
          <Route path="/Mentor" element={<Mentor/>} />
          <Route path="/Mentee" element={<Mentee/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />


        </Routes>
       
        <> 
        
        </>
       
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
