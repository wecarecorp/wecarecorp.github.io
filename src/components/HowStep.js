import React from "react";

const HowStep = ({ icon, text }) => {
  return (
    <>
      <div className="How-step">
        <div className="How-step__icon">
          <img src={icon} alt="step" />
        </div>

        <div className="How-step__description">{text}</div>
      </div>
    </>
  );
};

export default HowStep;
