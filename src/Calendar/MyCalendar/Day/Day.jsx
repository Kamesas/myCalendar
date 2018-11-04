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
  momentForDay,
  notes
}) => {
  return (
    <div
      className={`item-day ${today} ${currentMonth} `}
      onClick={() => selected(momentForDay)}
    >
      <span className="firstWeek">{firstWeek ? dayName : null}</span>
      <div className="numData">{numDate}</div>
      {numDate === 1 ? month : null}
      {notes.map(note => (note.id === momentForDay ? note.title : null))}
    </div>
  );
};

export default Day;
