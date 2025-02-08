import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => (
  <nav className="navigation">
    <div className="logo">
      <Link to="/">THERO STUDIO</Link>
    </div>
    <div className="nav-links">
      <Link to="/services">Services</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
export default Navigation;