import React from "react";
import ProblemTopic from "./ProblemTopic.js";
import { Container, Button } from "react-bootstrap";
import { Link } from "@reach/router";

const Problem = () => {
  const topics = [
    "Alinhar o time à estratégia",
    "Engajar os colaboradores",
    "Aumentar a performance",
    "Dar flexibilidade aos colaboradores",
    "Se diferenciar como marca empregadora"
  ];

  const listTopics = topics.map((topic, index) => (
    <ProblemTopic key={"pt" + index} name={topic} />
  ));

  return (
    <>
      <div className="Problem">
        <div className="Problem__top"></div>

        <div className="Problem__wrapper">
          <Container>
            <div className="d-flex justify-content-center">
              <div className="Problem__description">
                Sabemos que muitas das práticas de gestão de pessoas que ainda
                são utilizada nas empresas não atendem mais as necessidades de
                hoje. Ao mesmo tempo, desafios de inovação e performance nunca
                foram tão grandes.
                <br />
                <br />
                Para se manterem competitivas, as empresas disputam os melhores
                profissionais com o restante do mercado empregador. Estamos
                vivendo uma guerra por talentos! Talentos que buscam boas
                experiências em seu ambiente de trabalho e para os quais as
                recompensas monetárias tradicionais não são mais suficientes.
                <br />
                <br />
                Aqui na WeCare desenvolvemos soluções
                <div className="d-none d-md-block"></div> para ajudar a sua
                empresa a:
              </div>
            </div>

            <div className="Problem__topics d-flex justify-content-between">
              {listTopics}
            </div>
          </Container>
        </div>

        <div className="Problem__bottom">
          <Container className="text-center">
            <Link to="contato">
              <Button variant="warning">Quero agendar um demo</Button>
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Problem;
