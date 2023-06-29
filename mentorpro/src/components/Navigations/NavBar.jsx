import logo from '../../assets/images/M logo.png'
import {FaHome, FaSignOutAlt} from 'react-icons/fa'
import {FcAbout, FcBusinessContact} from 'react-icons/fc'
import {LuHelpingHand} from 'react-icons/lu'
// import {GrResources} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import prof from '../../assets/images/OIP.jpeg'
import { useContext } from "react";
import { Context } from "../Context/userContext/Context";

import './NavBar.css'
function NavBar() {
    
    const { dispatch} = useContext(Context)
 const handleLogout = () => {
   dispatch({type: "LOGOUT"})
   
 };

  return (
    <header className="landing-nav">
   <img src={logo} alt="" className="logo" />
    <nav className="landing-nav-header">
        <ul className="landing-nav-header-list">
            <li className="landing-nav-header-list--item active"> <Link to='/Home'> <FaHome className='icon' />Home</Link></li>
            <li className="landing-nav-header-list--item active"><Link to='/About'><FcAbout  className='icon'/> About</Link></li>
            <li className="landing-nav-header-list--item active "><Link to='/Mentor'> <LuHelpingHand  className='icon'/> Mentors</Link></li> 
            <li className="landing-nav-header-list--item active"><Link to='/Mentee'> < LuHelpingHand  className='icon'/> Mentees</Link></li>
            {/* <li className="landing-nav-header-list--item active"><Link to='/Profile'><GrResources className='icon'/> Profile</Link></li> */}
            <li className="landing-nav-header-list--item active"><Link to='/Contact'> <FcBusinessContact  className='icon'/> Contact</Link></li>
            <li className="landing-nav-header-list--item active"><Link to='/Admin'>  Admin</Link></li>
            <li className="landing-nav-btn">
                <div className='landin-nav-header-left'>
                  
                    <Link to='/Profile'className="profile" > <img  src={prof} alt="" /> </Link>
                    <Link to='/' onClick={handleLogout} className="landing-nav-btn-hero landing-nav-btn-pri"> <FaSignOutAlt  className='icon' /> sign out </Link>
                   
                </div>
            </li>
        </ul>

       
    </nav>
</header>
  )
}

export default NavBar
