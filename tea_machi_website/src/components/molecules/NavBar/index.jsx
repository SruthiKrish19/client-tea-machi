import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";
import logo from "../../../assets/tea-machi-logo.png"

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
			<a href={link.href} key={link.name}>
			  {link.name}
			</a>
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