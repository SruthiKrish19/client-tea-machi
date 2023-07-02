import "./index.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import {
  contactHeading,
  contactContent,
  contactDetails,
  contactPhone,
  contactEmail,
  employementContent,
  employement,
} from "../../../constants";

function Contact() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="con-title text-center pb-3">
        <h2>{contactHeading}</h2>
      </div>

      <div className="contact-content">{contactContent}</div>

      <div className="contact-container">
        <div className="contact-form">
          <div className="form-container">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="input-container">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-details-content">
            <h3>{contactDetails}</h3>
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
            <hr />
            <h3>{employement}</h3>
            <p>{employementContent}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
