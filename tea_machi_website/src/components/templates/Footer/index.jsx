import React from "react";
import logo from "../../../assets/tea-machi-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./index.css";
// import {
//   MapContainer,
//   TileLayer,
//   useMap,
// } from 'https://cdn.esm.sh/react-leaflet'
import { MapContainer, TileLayer,Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
function Footer() {
  const markers=[{
    geocode:[11.0361,76.9783],
    popUp:"Hi Sru Pig"
  }]
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
      <div className="map-container">
        {/* <MapComponent /> */}
        <MapContainer center={[11.0168, 76.9558]} zoom={13}>
          <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

        />
        {

        markers.map(marker =>(
          <Marker position={marker.geocode}>

          </Marker>
        ))
        }
        </MapContainer>
      </div>
      <p className="footer-creator">Created with ❤️ by Midden & Ena!</p>
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
