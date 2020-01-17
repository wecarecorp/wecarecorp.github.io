import React from "react";

const Statistic = ({ number, title }) => {
  return (
    <>
      <div className="Statistic">
        <div className="Statistic__value d-flex align-items-end">
          <div className="Statistic__number">{number}</div>

          <div className="Statistic__percentage">%</div>
        </div>

        <div className="Statistic__title">{title}</div>
      </div>
    </>
  );
};

export default Statistic;
