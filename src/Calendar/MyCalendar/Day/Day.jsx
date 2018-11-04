import React from "react";
import "./Day.css";

const Day = ({
  today,
  currentMonth,
  dayName,
  numDate,
  month,
  firstWeek,
  selected,
  momentForDay
}) => {
  return (
    <div
      className={`item-day ${today} ${currentMonth} `}
      onClick={() => selected(momentForDay)}
    >
      <span className="firstWeek">{firstWeek ? dayName : null}</span>
      <div className="numData">{numDate}</div>
      {numDate === 1 ? month : null}
      {console.log(momentForDay)}
    </div>
  );
};

export default Day;
