import React from 'react';
import Navbar from "../../molecules/NavBar";
import About from "../../molecules/About";
import Services from "../../molecules/Services";
import Subscriptions from "../../molecules/Subscriptions";
import Faqs from "../../molecules/FAQs";
import Contact from "../../molecules/Contact";
import Footer from "../Footer";
import "./index.css";
import { Element } from 'react-scroll';

function Home() {
  const navLinks = [
    { href: "about", name: "About" },
    { href: "services", name: "Services" },
    { href: "faqs", name: "FAQs" },
    { href: "contact", name: "Contact" },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} />
      <Element name="about">
        <About className="about" />
      </Element>
      <Element name="services">
        <Services className="services" />
      </Element>
      <Element name="faqs">
        <Faqs className="faqs" />
      </Element>
      <Element name="contact">
        <Contact className="contact" />
      </Element>
      <Footer />
    </>
  );
}

export default Home;