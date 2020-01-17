import React from "react";
import { Container } from "react-bootstrap";
import Client from "./Client.js";
import ambev from "./../images/ambev.png";
import caixa from "./../images/caixa.png";
import wiz from "./../images/wiz.png";
import focoSaude from "./../images/foco-saude.png";
import odilon from "./../images/odilon.png";
import novatics from "./../images/novatics.png";
import pitang from "./../images/pitang.png";
import arbit from "./../images/arbit.png";
import mirante from "./../images/mirante.png";
import vert from "./../images/vert.png";

const Clients = () => {
  const clients = [
    { image: ambev },
    { image: caixa },
    { image: wiz },
    { image: focoSaude },
    { image: odilon },
    { image: novatics },
    { image: pitang },
    { image: arbit },
    { image: mirante },
    { image: vert }
  ];

  const listClients = clients.map((client, index) => (
    <Client key={index} image={client.image} />
  ));

  return (
    <>
      <div className="Clients">
        <Container>
          <div className="text-center">
            <h2 className="Clients__title">
              Quem já criou experiências incríveis junto com a gente
            </h2>
          </div>

          <div className="Clients__list d-flex flex-wrap justify-content-between align-items-center">
            {listClients}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clients;
