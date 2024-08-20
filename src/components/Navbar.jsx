import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>My Recipe</h3>
      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/menu" onClick={showNavbar}>
          Menu
        </Link>
        <Link to="/about" onClick={showNavbar}>
          About Us
        </Link>
        <Link to="/contact" onClick={showNavbar}>
          Contact Us
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
