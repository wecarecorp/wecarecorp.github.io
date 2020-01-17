import React from "react";
import CompanyInfo from "./CompanyInfo.js";
import { Map, GoogleApiWrapper } from "google-maps-react";
import email from "./../images/email.svg";
import cellphone from "./../images/phone.svg";
import location from "./../images/map-marker.svg";

const Company = () => {
  const company_infos = [
    { icon: email, content: "contato@wecarecorp.com.br" },
    {
      icon: location,
      content:
        "Setor de Autarquias Sul Q. 4 - Asa Sul, Ed. Victoria Office Tower, Sala 701, Brasília - DF"
    }
  ];

  const listCompanyInfos = company_infos.map((info, index) => (
    <CompanyInfo icon={info.icon} content={info.content} />
  ));

  return (
    <div className="Company">
      <div className="Company__name">WeCare Incentivos Corporativos</div>

      <div className="Company__infos">{listCompanyInfos}</div>
    </div>
  );
};

export default Company;
