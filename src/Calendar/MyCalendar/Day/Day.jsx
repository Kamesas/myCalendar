import React from "react";
import "./Day.css";

const Day = ({ today, currentMonth, dayName, numDate }) => {
  return (
    <div className={`item-day ${today} ${currentMonth} `}>
      {dayName} {numDate}
    </div>
  );
};

export default Day;
