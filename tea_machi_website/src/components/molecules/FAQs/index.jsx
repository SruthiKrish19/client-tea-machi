import React, { useEffect, useRef } from 'react';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faqData } from "./FAQs";
import { faqHeader, faqFooter } from "../../../constants";
import Collapsable from "../../atoms/Collapse";

function Faqs() {
  const faqArray = Object.values(faqData);
  const faqContainerRef = useRef(null);

  useEffect(() => {
    const faqContainer = faqContainerRef.current;
    const faqItems = faqContainer.querySelectorAll(".faq-item");

    const handleScroll = () => {
      faqItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemHeight = item.offsetHeight;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - itemHeight / 10) {
          item.classList.add("animate");
        } else {
          item.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="faq-section" ref={faqContainerRef}>
      <div className="faq-item">
        <div className="faq-title text-center pb-3">
          <h2>{faqHeader}</h2>
        </div>
        <div className="faq" id="accordion">
          {faqArray.map((faq, index) => (
            <Collapsable
              key={index}
              className="faq-item" // Add the class here
              collapseHeader={faq.header}
              collapseContent={faq.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

