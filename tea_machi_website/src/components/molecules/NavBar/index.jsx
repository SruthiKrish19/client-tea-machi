import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./index.css";
import logo from "../../../assets/tea-machi-logo.png";

function Navbar({ navLinks }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="tea-machi" className="logo-image" />
        <h3>Tea Machi</h3>
      </div>
      <nav ref={navRef} className="navbar">
        {navLinks.map((link) => (
          <span key={link.name} onClick={showNavbar}>
            <Link
              to={link.href}
              smooth={true}
              duration={300}
              offset={-60} // Adjust the offset as needed to align the scroll position
              className="nav-link"
            >
              {link.name}
            </Link>
          </span>
        ))}
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

export default Navbar;
