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
    <>
      <div className="about">
        <div className="social-media">
          <FaEnvelope size={24} className="sm-icon" />
          <FaWhatsapp size={24} className="sm-icon" />
          <FaInstagram size={24} className="sm-icon" />
          <FaFacebook size={24} className="sm-icon" />
        </div>
        <h1>{teaMachi}</h1>
        <p>{tagline}</p>
      </div>
      <div className="about-content">{about}</div>
    </>
  );
}

export default About;
