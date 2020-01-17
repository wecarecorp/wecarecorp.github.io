import React from "react";

const Campaign = ({ icon, title, description }) => {
  return (
    <div className="Campaign">
      <img src={icon} alt="Campaign icon" />

      <div className="Campaign__title">{title}</div>

      <div className="Campaign__description">{description}</div>
    </div>
  );
};

export default Campaign;
