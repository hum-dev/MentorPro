import logo from '../../assets/images/M logo.png'
import {FaHome, FaSignOutAlt} from 'react-icons/fa'
import {FcAbout, FcBusinessContact} from 'react-icons/fc'
import {LuHelpingHand} from 'react-icons/lu'
import {GrResources} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import prof from '../../assets/images/portrait.png'
import './NavBar.css'
function NavBar() {
  return (
    <header className="landing-nav">
   <img src={logo} alt="" className="logo" />
    <nav className="landing-nav-header">
        <ul className="landing-nav-header-list">
            <li className="landing-nav-header-list--item"> <Link to='/Home'> <FaHome className='icon' />Home</Link></li>
            <li className="landing-nav-header-list--item"><Link to='/About'><FcAbout  className='icon'/> About</Link></li>
            <li className="landing-nav-header-list--item"><Link to='/Mentor'> <LuHelpingHand  className='icon'/> Mentors</Link></li> 
            <li className="landing-nav-header-list--item"><Link to='/Mentee'> < LuHelpingHand  className='icon'/> Mentees</Link></li>
            <li className="landing-nav-header-list--item"><Link to='/Resources'><GrResources className='icon'/> Resources</Link></li>
            <li className="landing-nav-header-list--item"><Link to='/Contact'> <FcBusinessContact  className='icon'/> Contact</Link></li>
            <li className="landing-nav-btn">
                <div className='landin-nav-header-left'>
                  
                    <a href="" className="profile"> <img src={prof} alt="" /> </a>
                    <a href="" className="landing-nav-btn-hero landing-nav-btn-pri"> <FaSignOutAlt  className='icon' /> sign out </a>
                   
                </div>
            </li>
        </ul>

       
    </nav>
</header>
  )
}

export default NavBar
