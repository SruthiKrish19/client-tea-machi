import "./index.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src="src/assets/tea-machi-logo.png" alt="Tea Machi Logo" className="logo" />
        </div>
        <div className="footer-section">
          <h5 className="section-title">Contact</h5>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 123 Street, City</li>
            <li><i className="fas fa-phone"></i> 123-456-7890</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="section-title">Follow Us</h5>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <p className="footer-creator">Created with <span role="img" aria-label="Heart">❤️</span> by Midden & Ena!</p>
    </footer>
  );
}

export default Footer;
