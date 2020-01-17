import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import illustration from "../images/ilustracao-banner.svg";

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <Container className="Banner__container h-100">
          <div className="d-flex justify-content-between flex-column h-100">
            <div className="Banner__wrapper">
              <h1 className="Banner__title">
                Flexibilidade sem complexidade
                <div className="d-none d-md-block"></div> para engajar o seu
                time
              </h1>

              <div className="Banner__description">
                Soluções em gamificação e incentivos corporativos
                <div className="d-none d-md-block"></div> flexíveis para apoiar
                a sua empresa em seus desafios
                <div className="d-none d-md-block"></div> de pessoas e negócios.
              </div>

              <Link to="contato">
                <Button variant="outline-success" className="Banner__cta">
                  Quero saber mais
                </Button>
              </Link>
            </div>

            <img
              src={illustration}
              alt="Ilustração WeCare"
              className="Banner__illustration"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
