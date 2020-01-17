import React from "react";
import { Container } from "react-bootstrap";
import HowStep from "./HowStep.js";
import step1 from "./../images/step-1.svg";
import step2 from "./../images/step-2.svg";
import step3 from "./../images/step-3.svg";
import step4 from "./../images/step-4.svg";

const How = () => {
  const steps = [
    {
      icon: step1,
      text:
        "A WeCare, em conjunto com a empresa cliente, cria a Gamificação para distribuição de pontos."
    },
    {
      icon: step2,
      text:
        "A empresa adquire um pacote de pontos que terá disponível para distribuir aos colaboradores."
    },
    {
      icon: step3,
      text:
        "A empresa distribui pontos aos seus colaboradores conforme estratégia e métricas pré-estabelecidas. "
    },
    {
      icon: step4,
      text:
        "Os colaboradores trocam seus pontos por produtos e serviços disponíveis em nosso marketplace."
    }
  ];

  const listHowSteps = steps.map((step, index) => (
    <HowStep key={"hs" + index} icon={step.icon} text={step.text} />
  ));

  return (
    <>
      <div className="How">
        <Container>
          <h2 className="How__title">
            Quem disse que engajar e dar flexibilidade
            <div className="d-none d-md-block"></div> para o time tem que dar
            trabalho?
          </h2>

          <div className="How__subtitle">
            Atuamos em todos os processos para o RH não ter dor de cabeça!
          </div>

          <div className="How__steps d-flex justify-content-center">
            <div className="d-flex">{listHowSteps}</div>

            <div className="How__tip">
              Fazemos toda a gestão desde a disponibilização dos pontos à
              <div className="d-none d-md-block"></div> empresa até a entrega
              dos itens resgatados aos colaboradores.
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default How;
