import React from "react";
import logo from "../../../assets/tea-machi-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./index.css";

function Footer() {
  const markers = [
    {
      geocode: [11.0361, 76.9783],
      popUp: "Hi Sru Pig",
    },
  ];

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
    </footer>
  );
}

// function MapComponent() {
//   const map = useMap();
//   map.setView([51.505, -0.09], 13);

//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "200px", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// }

export default Footer;
