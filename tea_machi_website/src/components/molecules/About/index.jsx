import "./index.css";
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

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
        <h1>TEA MACHI</h1>
        <p>It all begins with a sip!</p>
      </div>
      <div className="about-content">
      Welcome to Tea Machi, your go-to destination for high-quality, hygienically packed snacks delivered right to your doorstep. We take pride in offering a wide variety of delicious snacks that are perfect for any time of the day. With our state-of-the-art machinery and packaging process, we ensure that every snack you receive maintains its freshness and quality.
      </div>
    </>
  );
}


export default About;
