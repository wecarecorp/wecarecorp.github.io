import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import SolutionStep from "./SolutionStep.js";
import step1 from "./../images/step-1.svg";
import step2 from "./../images/step-2.svg";
import step3 from "./../images/step-3.svg";
import plataforma from "./../images/plataforma.png";

const Solution = () => {
  const steps = [
    {
      id: "st1",
      icon: step1,
      text: [
        "Entendemos a estratégia, cultura",
        <div className="d-none d-md-block"></div>,
        " e desafios da empresa"
      ]
    },
    {
      id: "st2",
      icon: step2,
      text: [
        "Unimos conhecimento estratégico em RH",
        <div className="d-none d-md-block"></div>,
        " e gamificação para criar soluções."
      ]
    },
    {
      id: "st3",
      icon: step3,
      text: [
        "Entregamos um catálogo de ofertas",
        <div className="d-none d-md-block"></div>,
        " alinhado ao perfil e necessidades",
        <div className="d-none d-md-block"></div>,
        " do público."
      ]
    }
  ];

  const listSolutionSteps = steps.map(step => (
    <SolutionStep key={step.id} icon={step.icon} text={step.text} />
  ));

  return (
    <>
      <div className="Solution">
        <Container>
          <h2 className="Solution__title">
            Apoiamos sua empresa criando soluções
            <div className="d-none d-md-block"></div> únicas de engajamento de
            colaboradores
          </h2>

          <div className="Solution__steps">{listSolutionSteps}</div>

          <Link to="contato">
            <Button variant="outline-success" className="Solution__cta">
              Quero saber mais
            </Button>
          </Link>
        </Container>

        <img
          src={plataforma}
          alt="Plataforma WeCare"
          className="Solution__platform"
        />
      </div>
    </>
  );
};

export default Solution;
