import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './components/Context/userContext/Context'
import NavHero from './components/Landingpage/LandingNav/NavHero'
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
import Profile from './pages/Profile/Profile'
import NavBar from './components/Navigations/NavBar'
import Admin from './pages/Admin/Admin'
import ViewUser from './pages/Admin/ViewUser'
import ViewMentors from './pages/Admin/ViewMentors'
import ViewMentees from './pages/Admin/ViewMentees'







function App() {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <>
      {
        user ? <NavBar/> : <NavHero/>
      }
      
      
        <Routes>
          <Route path="/" element={<Hero />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        
          <Route path="/Home" element={ user ? <Home/> : <Hero replace/> } />
          <Route path="/About" element={<About/>} />
          <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/FaQ" element={<FaQ/>} />
          <Route path="/Mentor" element={<Mentor/>} />
          <Route path="/Mentee" element={<Mentee/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Profile" element={<Profile/>} />

          <Route path="/Admin" element={<Admin/>} >

           <Route path="viewuser" element={<ViewUser/>} />
           <Route path="ViewMentors" element={<ViewMentors/>} />
           <Route path="ViewMentees" element={<ViewMentees/>} />

          </Route>
          
          
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
