import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    cellphone: "",
    message: ""
  });

  const handleName = event => {
    setContact({ ...contact, name: event.target.value }, {});
  };

  const handleEmail = event => {
    setContact({ ...contact, email: event.target.value }, {});
  };

  const handleCellphone = event => {
    setContact({ ...contact, cellphone: event.target.value }, {});
  };

  const handleMessage = event => {
    setContact({ ...contact, message: event.target.value }, {});
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios.post("https://app.wecarecorp.com.br/contact", contact).then(response => {
      setMessageSent(true);
    });
  };

  return (
    <>
      <div className="ContactForm">
        <Form onSubmit={e => handleSubmit(e)}>
          <input type="hidden" name="tipo_de_contato" value="Contato geral" />

          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              onChange={e => handleName(e)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={e => handleEmail(e)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              name="telefone"
              onChange={e => handleCellphone(e)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="mensagem"
              onChange={e => handleMessage(e)}
              required
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="success">
            Enviar mensagem
          </Button>
        </Form>

        {messageSent ? (
          <Alert variant="success" className="mt-4">A sua mensagem foi enviada com sucesso!</Alert>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ContactForm;
