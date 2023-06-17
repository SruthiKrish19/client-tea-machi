
import Navbar from "../../molecules/NavBar";
import About from "../../molecules/About";
import Services from "../../molecules/Services"
import Subscriptions from "../../molecules/Subscriptions"
import Faqs from "../../molecules/FAQs"
import Contact from "../../molecules/Contact"
import Footer from "../Footer"
import "./index.css";

function Home() {
  const navLinks = [
    { href: "#about", name: "About" },
    { href: "#services", name: "Services" },
    { href: "#faqs", name: "FAQs" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} />
      <About className="about" />
      <Services className="services" />
      <Subscriptions className="about" />
      <Faqs className="faqs" />
      <Contact className="comtact" />
      <Footer />
    </>
  );
}

export default Home;
