import React from 'react';
import SubHeader from './../components/SubHeader.js';
import ContactForm from './../components/ContactForm.js';
import Company from './../components/Company.js';
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <SubHeader title="Contato" />

      <Container className="Contact">
        <Row>
          <Col md="6">
            <ContactForm />
          </Col>

          <Col md="6">
            <Company />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact;
