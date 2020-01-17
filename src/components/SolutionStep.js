import React from "react";

const SolutionStep = ({ icon, text }) => {
  return (
    <div className="Solution-step d-flex align-items-center">
      <div className="Solution-step__icon">
        <img src={icon} alt="step" />
      </div>

      <div className="Solution-step__description">{text}</div>
    </div>
  );
};

export default SolutionStep;
