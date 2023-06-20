import "./index.css";
import React, { useState } from "react";

import Collapsable from "../../atoms/Collapse";
import { faqData } from "./FAQs"
import { faqFooter } from "../../../constants";

function Faqs() {
  const faqArray = Object.values(faqData);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              {faqArray.map((faq, index) => (
                <div className="card" key={`faq-${index}`}>
                  <div
                    className={`card-header ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="mb-0">
                      <h5 className="faq-title">
                        <span className="badge">{index + 1}</span>
                        {faq.header}
                      </h5>
                    </div>
                  </div>
                  <div
                    className={`collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="card-body">{faq.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Faqs;