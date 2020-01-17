import React from "react";
import { Container } from "react-bootstrap";
import effects from "./../images/subheader-bg.svg";

const SubHeader = ({ title }) => {
  return (
    <div className="SubHeader">
      <Container>
        <h1 className="SubHeader__title">{title}</h1>
      </Container>

      <img src={effects} alt="Subheader Effect" className="SubHeader__effects" />
    </div>
  );
};

export default SubHeader;
