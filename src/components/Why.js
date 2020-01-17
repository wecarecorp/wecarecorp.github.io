import React from "react";
import Statistic from "./Statistic.js";
import { Container, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import whyBottom from "./../images/why-bottom.svg";

const Why = () => {
  const statistics = [
    { number: 22, title: "Mais produtivas" },
    { number: 21, title: "Mais lucrativas" },
    { number: 10, title: "Clientes mais satisfeitos" }
  ];

  const listStatistics = statistics.map((statistic, index) => (
    <Statistic key={index} number={statistic.number} title={statistic.title} />
  ));

  return (
    <>
      <div className="Why">
        <div className="Why__top"></div>

        <div className="Why__wrapper">
          <Container>
            <h2 className="Why__title">
              Por que investir em engajamento do colaborador?
            </h2>

            <div className="Why__subtitle">
              Empresas com maiores níveis de engajamento:
            </div>
          </Container>

          <div className="Why__wave">
            <Container>
              <div className="Why__statistics d-flex">{listStatistics}</div>

              <div className="Why__source">Fonte: Gallup</div>

              <Link to="contato">
                <Button variant="warning" className="Why__cta">
                  Quero agendar um demo
                </Button>
              </Link>
            </Container>
          </div>
        </div>

        <img src={whyBottom} alt="Why bottom" className="Why__bottom" />
      </div>
    </>
  );
};

export default Why;
