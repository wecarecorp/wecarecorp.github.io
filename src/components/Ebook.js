import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Ebook = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("https://app.wecarecorp.com.br/ebook", {
        email: email
      })
      .then(response => {
        setLead(true);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="Ebook"
        size="lg"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          Buscando novas maneiras de engajar o time
          <div className="d-md-block d-none"></div> e aumentar a performance do
          seu negócio?
          <div className="Ebook__subtitle">E-book</div>
          <div className="Ebook__title">
            5 PASSOS PARA CRIAR SUA ESTRATÉGIA
            <div className="d-md-block d-none"></div> DE GAMIFICAÇÃO E
            ENGAJAMENTO
          </div>
          Baixe o e-book e descubra como a
          <div className="d-md-block d-none"></div> Gamificação pode te ajudar
          nesses desafios!
          <Form
            className="Ebook__form form-inline justify-content-center pb-3"
            onSubmit={event => handleSubmit(event)}
          >
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite seu email"
                className="Ebook__input"
                onChange={event => setEmail(event.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="warning" className="Ebook__submit">
              Quero receber
            </Button>
          </Form>
          {lead ? (
            <Alert variant="success">O e-book foi enviado ao seu email!</Alert>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Ebook;
