import React from "react";
import logo from "../../../assets/tea-machi-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./index.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Tea Machi Logo" className="logo" />
        </div>
        <div className="footer-section">
          <h5 className="section-title">Reach out to us!</h5>
          <ul className="contact-info">
            <li>+91 75984 54537</li>
            <li>teamachiceo@gmail.com</li>
          </ul>
        </div>
        <div className="footer-section">
        <h5 className="section-title">Follow us!</h5>
        <ul className="social-info">
            <li>
              <a href="https://facebook.com">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-creator">Created with ❤️ by Midden & Ena!</p>
    </footer>
  );
}

export default Footer;
