import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Campaign from "./Campaign.js";
import campaign1 from "./../images/campaign-1.svg";
import campaign2 from "./../images/campaign-2.svg";
import campaign3 from "./../images/campaign-3.svg";
import campaign4 from "./../images/campaign-4.svg";
import campaign5 from "./../images/campaign-5.svg";
import campaign6 from "./../images/campaign-6.svg";

const Campaigns = () => {
  const campaigns = [
    {
      icon: campaign1,
      title: "Incentivo à vendas",
      description:
        "Desdobre desafios de vendas ou métricas para melhorar o seu funil."
    },
    {
      icon: campaign2,
      title: "Desenvolvimento do colaborador",
      description:
        "Estabelece objetivos de desenvolvimento e recompense à medida que são alcançados."
    },
    {
      icon: campaign3,
      title: "Incentivo à desempenho",
      description:
        "Crie desafios de resultados ou entregas para seus colaboradores e recompense suas conquistas."
    },
    {
      icon: campaign4,
      title: "Engajamento em processos corporativos",
      description:
        "Gamefique seus processos de pessoas como onboarding, treinamento etc. e aumente o engajamento dos envolvidos."
    },
    {
      icon: campaign5,
      title: "Datas comemorativas",
      description:
        "Presenteie seus colaboradores com pontos em datas especiais como aniversário, tempo de empresa e outras datas importantes."
    },
    {
      icon: campaign6,
      title: "Campanhas personalizadas",
      description:
        "Entendemos sua necessidade e criamos campanhas específicas e personalizadas."
    }
  ];

  const listCampaigns = campaigns.map(campaign => {
    return (
      <Col md="4">
        <Campaign
          icon={campaign.icon}
          title={campaign.title}
          description={campaign.description}
        />
      </Col>
    )
  });

  return (
    <>
      <div className="Campaigns">
        <Container>
          <h2 className="Campaigns__title">
            Quais as prioridades da sua empresa hoje?
          </h2>

          <div className="Campaigns__subtitle">
            Usamos gamificação para criar campanhas que vão engajar o time! Alguns exemplos:
          </div>

          <Row className="Campaigns__list">
            { listCampaigns }
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Campaigns;
