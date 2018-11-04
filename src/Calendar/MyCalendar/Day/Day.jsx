import React from "react";
import "./Day.css";

const Day = ({ today, currentMonth, dayName, numDate, month, firstWeek }) => {
  return (
    <div className={`item-day ${today} ${currentMonth} `}>
      <span className="numData">{numDate}</span>
      {numDate === 1 ? month : null}
      {firstWeek ? dayName : null}
    </div>
  );
};

export default Day;
