import React, { useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronCircleDown } from "react-icons/fa";

function Collapsable({ collapseHeader, collapseContent, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsOpen(!isOpen);
  };

  return (
    <div className="card" key={`faq-${index}}`}>
      <div
        className={`card-header ${activeIndex === index ? "active" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="mb-0">
          <h5 className="faq-title">
            <span className="badge">{index + 1}</span>
            {collapseHeader}
          </h5>
        </div>
        <FaChevronCircleDown
            size={24}
            className={`card-icon ${isOpen ? "rotate" : ""}`}
          />
      </div>
      <div className={`collapse ${activeIndex === index ? "show" : ""}`}>
        <div className="card-body">{collapseContent}</div>
      </div>
    </div>
  );
}

export default Collapsable;
