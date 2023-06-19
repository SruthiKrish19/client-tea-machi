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
    <>
      <div className="contact-container">
        <div className="contact-header">{contactHeading}</div>
        <div className="contact-content">{contactContent}</div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
