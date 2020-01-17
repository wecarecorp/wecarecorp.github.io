import React from "react";

const CompanyInfo = ({ icon, content }) => {
  return (
    <>
      <div className="CompanyInfo d-flex align-items-center">
        <img src={icon} alt="Company Info"/>

        <div className="CompanyInfo__content">{content}</div>
      </div>
    </>
  )
}

export default CompanyInfo;
