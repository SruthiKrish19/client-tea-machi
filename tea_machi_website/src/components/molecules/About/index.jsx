import "./index.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { teaMachi, tagline, about } from "../../../constants.js";

function About() {
  return (
    <div className="about">
      <div className="social-media">
        <FaEnvelope size={24} className="sm-icon" />
        <FaWhatsapp size={24} className="sm-icon" />
        <a href="https://www.instagram.com/teamachi_cbe/#">
        <FaInstagram size={24} className="sm-icon" />

        </a>
        <a href="https://www.facebook.com/profile.php?id=100092968516950&mibextid=ZbWKwL">
        <FaFacebook size={24} className="sm-icon" />

        </a>
      </div>
      <p>{teaMachi}</p>
      {/* <p>{tagline}</p> */}
      <div className="about-content">{about}</div>
    </div>
  );
}

export default About;
