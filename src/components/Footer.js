import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "@reach/router";
import logo from "./../images/logo-wecare-gray.svg";
import facebook from "./../images/facebook-brands.svg";
import instagram from "./../images/instagram-brands.svg";
import linkedin from "./../images/linkedin-brands.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <div className="Footer__wrapper d-flex justify-content-between">
          <div className="Footer__logo">
            <img src={logo} alt="Logo WeCare" />

            <div className="Footer__description">
              Soluções em engajamento
              <br />e incentivos corporativos.
            </div>
          </div>

          <div className="Footer__links d-flex">
            <div className="Links">
              <div className="Links__title">Site</div>

              <ul className="Links__list">
                <li>
                  <Link to="/" className="Links__link">
                    Início
                  </Link>
                </li>

                <li>
                  <Link to="contato" className="Links__link">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="Links">
              <div className="Links__title">Plataforma</div>

              <ul className="Links__list">
                <li>
                  <Link to="contato" className="Links__link">
                    Agende um demo
                  </Link>
                </li>

                <li>
                  <a
                    href="http://app.wecarecorp.com.br"
                    className="Links__link"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </li>
              </ul>
            </div>

            <div className="Links">
              <div className="Links__title">Social</div>

              <ul className="Links__list">
                <li>
                  <a
                    href="https://www.instagram.com/wecareincentivos/"
                    className="Links__link"
                    target="_blank"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="Links__social"
                    />
                  </a>
                  <span>&emsp;</span>
                  <a
                    href="https://www.facebook.com/wecarecorp"
                    className="Links__link"
                    target="_blank"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="Links__social"
                    />
                  </a>
                  <span>&emsp;</span>
                  <a
                    href="https://www.linkedin.com/company/we.care/"
                    className="Links__link"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      className="Links__social"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
