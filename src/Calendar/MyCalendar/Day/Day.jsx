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
  widthDay,
  deleteNote
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
        note.date === momentForDay ? (
          <p key={note.id + note.title} id={note.id} className="noteTitle">
            {note.title}
            <button
              style={{ float: "right", fontSize: 8 }}
              onClick={() => deleteNote(note.id)}
            >
              x
            </button>
          </p>
        ) : null
      )}
    </div>
  );
};

export default Day;
