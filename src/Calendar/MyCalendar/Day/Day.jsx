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
          <li
            key={note.id + note.title}
            id={note.id}
            className={`noteTitle ${note.time ? "noteTitle-time" : ""}`}
          >
            {note.time ? (
              <span>
                <span className="span-time">{note.time} </span>
                <span>{note.title}</span>
              </span>
            ) : (
              <span>{note.title}</span>
            )}

            {/* <button
              style={{ float: "right", fontSize: 8 }}
              onClick={() => deleteNote(note.id)}
            >
              x
            </button> */}
          </li>
        ) : null
      )}
    </div>
  );
};

export default Day;
