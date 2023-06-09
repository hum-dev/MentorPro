import './NavHero.css'
import logo from '../../../assets/images/M logo.png'

function NavHero() {
  return (
    <header className="landing-nav">
       <img src={logo} alt="" className="logo" />
    {/* <h2 className="logo">MentorPro</h2> */}
    <nav className="landing-nav-header">
        <ul className="landing-nav-header-list">
{/* 
            <li className="landing-nav-header-list--item"><a href="">mentor</a></li>
            <li className="landing-nav-header-list--item"><a href="">mentee</a></li> */}

            <li className="landing-nav-btn">
                <div>
                    <a href="" className="landing-nav-btn-hero landing-nav-btn-sec">log in</a>
                    <a href="" className="landing-nav-btn-hero landing-nav-btn-pri">sign up </a>
                </div>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default NavHero
