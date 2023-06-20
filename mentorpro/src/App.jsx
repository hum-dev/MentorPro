import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Hero from './components/Landingpage/LandingHero/Hero'
import Login from './components/Account/Login/Login'
import SignUp from './components/Account/SignUp/SignUp'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <>
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
