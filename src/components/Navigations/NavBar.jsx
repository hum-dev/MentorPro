
import './NavBar.css'
function NavBar() {
  return (
    <header className="landing-nav">
    <h2 className="logo">MentorPro</h2>
    <nav className="landing-nav-header">
        <ul className="landing-nav-header-list">
            <li className="landing-nav-header-list--item"><a href="">home</a></li>
            <li className="landing-nav-header-list--item"><a href="">about</a></li>
            <li className="landing-nav-header-list--item"><a href="">mentor</a></li>
            <li className="landing-nav-header-list--item"><a href="">mentee</a></li>
            <li className="landing-nav-header-list--item"><a href="">resources</a></li>
            <li className="landing-nav-header-list--item"><a href="">contact us</a></li>
            <li className="landing-nav-btn">
                <div>
                    <a href="" className="landing-nav-btn-hero landing-nav-btn-pri">sign up </a>
                    <a href="" className="landing-nav-btn-hero landing-nav-btn-sec">log in</a>
                </div>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default NavBar
