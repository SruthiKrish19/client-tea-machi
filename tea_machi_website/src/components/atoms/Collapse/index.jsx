import React, { useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import "./index.css";
import { FaChevronCircleDown } from "react-icons/fa";

function Collapsable({ collapseHeader, collapseContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Collapse isOpen={isOpen} className="collapse-container">
        <Card className="card">
          <CardHeader className="card-header">
            {collapseHeader}
            <FaChevronCircleDown
              size={24}
              className="card-icon"
              onClick={toggle}
            />
          </CardHeader>
          {isOpen && (
            <CardBody className="card-body">{collapseContent}</CardBody>
          )}
        </Card>
      </Collapse>
    </>
  );
}

export default Collapsable;
