import React from "react";
import icon from "./../images/problem-topic-icon.svg";

const ProblemTopic = ({ name }) => {
  return (
    <>
      <div className="Problem-topic">
        <img
          src={icon}
          alt="Problem topic icon"
          className="Problem-topic__icon"
        />

        <div className="Problem-topic__name">{name}</div>
      </div>
    </>
  );
};

export default ProblemTopic;
