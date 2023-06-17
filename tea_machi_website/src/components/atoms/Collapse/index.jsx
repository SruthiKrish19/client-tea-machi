import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardHeader } from 'reactstrap';
import {FaChevronCircleDown} from "react-icons/fa"

function Collapsable({ collapseHeader, collapseContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardHeader>
            {collapseHeader}
            <FaChevronCircleDown size={24} onClick={toggle }/>
          </CardHeader>
          <CardBody>{collapseContent}</CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default Collapsable;
