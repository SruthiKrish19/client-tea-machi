import "./index.css";
import { useState } from "react";
import { contactHeading, contactContent } from "../../../constants";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server and handle email sending
    // You can use Axios or Fetch API to make a POST request to the server
    // Include the form data in the request body and handle the email sending on the server
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="contact-header">{contactHeading}</div>
        <div className="contact-content">{contactContent}</div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details-content">
          <h3>Contact Details</h3>
          <p>Address: 123 Main St, City, Country</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: example@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
