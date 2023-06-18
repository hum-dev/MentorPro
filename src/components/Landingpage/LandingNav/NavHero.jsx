import './NavHero.css';
import logo from '../../../assets/images/M logo.png';
import { Link } from 'react-router-dom';

function NavHero() {
  return (
    <header className="landing-nav">
      <img src={logo} alt="" className="logo" />
      <nav className="landing-nav-header">
        <ul className="landing-nav-header-list">
          <li className="landing-nav-btn">
            <div>
              <Link to="/Login" className="landing-nav-btn-hero landing-nav-btn-sec">
                log in
              </Link>
              <Link to="/SignUp" className="landing-nav-btn-hero landing-nav-btn-pri">
                sign up
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHero;
