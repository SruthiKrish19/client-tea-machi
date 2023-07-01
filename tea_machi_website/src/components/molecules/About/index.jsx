import React from "react";
import food1 from "../../../assets/images/food1.png";
import food2 from "../../../assets/images/food2.png";
import food3 from "../../../assets/images/food3.png";
import dialog1 from "../../../assets/images/dialog-1.svg";
import dialog2 from "../../../assets/images/dialog-2.svg";
import circle from "../../../assets/images/circle.svg";
import ring from "../../../assets/images/ring.svg";
import "./index.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { teaMachi, tagline, about } from "../../../constants.js";

const About = () => {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <p className="home-subtext">{tagline}</p>

        <h1 className="main-heading">{teaMachi}</h1>

        <p className="home-text">{about}</p>

        <div className="social-media">
          <a href="mailto:teamachiceo@gmail.com">
            <FaEnvelope size={24} className="sm-icon" />
          </a>
          <a
            href="https://wa.me/919042373353"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} className="sm-icon" />
          </a>
          <a href="https://www.instagram.com/teamachi_cbe/#">
            <FaInstagram size={24} className="sm-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092968516950&mibextid=ZbWKwL">
            <FaFacebook size={24} className="sm-icon" />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img
          src={food1}
          alt="food"
          className="food-img food-1"
          width="200"
          loading="lazy"
        />
        <img
          src={food2}
          alt="food"
          className="food-img food-2"
          width="200"
          loading="lazy"
        />
        <img
          src={food3}
          alt="food"
          className="food-img food-3"
          width="200"
          loading="lazy"
        />

        <img
          src={dialog1}
          alt="dialog"
          className="dialog dialog-1"
          width="230"
        />
        <img
          src={dialog2}
          alt="dialog"
          className="dialog dialog-2"
          width="230"
        />

        <img
          src={circle}
          alt="circle shape"
          className="shape shape-1"
          width="25"
        />
        <img
          src={circle}
          alt="circle shape"
          className="shape shape-2"
          width="15"
        />
        <img
          src={circle}
          alt="circle shape"
          className="shape shape-3"
          width="30"
        />
        <img src={ring} alt="ring shape" className="shape shape-4" width="60" />
        <img src={ring} alt="ring shape" className="shape shape-5" width="40" />
      </div>
    </section>
  );
};

export default About;
