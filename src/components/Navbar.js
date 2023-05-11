import logo from '../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  return (
      <header className = "Navbar">
        <img src={logo} className="Navbar-logo" alt="logo" />
        
        <ul className = "Navbar-list">
          <li>
            <a href="google.com">About</a>
          </li>
          <li>
            <a href="google.com">My Skills</a>
          </li>
          <li>
            <a href="google.com">Work</a>
          </li>
          <li>
            <a href="google.com">Contact</a>
          </li>
          <li>
            <a href="google.com">Blog</a>
          </li>
        </ul>
      </header>
  );
}

export default Navbar;
