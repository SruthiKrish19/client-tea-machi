import React, { useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import "./index.css";
import { FaChevronCircleDown } from "react-icons/fa";

function Collapsable({ collapseHeader, collapseContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Card className="card">
        <CardHeader className="card-header" onClick={toggle}>
          {collapseHeader}
          <FaChevronCircleDown
            size={24}
            className={`card-icon ${isOpen ? "rotate" : ""}`}
          />
        </CardHeader>
          {isOpen && <CardBody className="card-body">{collapseContent}</CardBody>}
      </Card>
    </>
  );
}

export default Collapsable;
