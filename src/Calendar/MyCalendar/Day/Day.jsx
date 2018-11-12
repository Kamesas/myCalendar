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
  notes,
  divRef,
  widthDay
}) => {
  return (
    <div
      style={{ height: widthDay }}
      className={`item-day ${today} ${currentMonth} `}
      onClick={() => selected(momentForDay)}
      ref={divRef}
    >
      <span className="firstWeek">{firstWeek ? dayName : null}</span>
      <div className="numData">
        {numDate} {numDate === 1 ? month : null}
      </div>

      {notes.map(note =>
        note.id === momentForDay ? (
          <p className="noteTitle">{note.title}</p>
        ) : null
      )}
    </div>
  );
};

export default Day;
