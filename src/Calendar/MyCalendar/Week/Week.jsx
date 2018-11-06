import React from "react";
import Day from "../Day/Day";
import "./Week.css";

const Week = props => {
  const week = [];
  const startDayInMonth = props.moment.day("Monday");

  for (let index = 0; index < 7; index++) {
    week.push(startDayInMonth.clone());
    startDayInMonth.add(1, "day");
  }
  return (
    <div className="week-item">
      {week.map((day, i) => (
        <Day
          key={day.format("DD MM YYYY")}
          notes={props.notes}
          momentForDay={day.format("DD MM YYYY")}
          firstWeek={props.firstWeek}
          dayName={day.format("ddd")}
          numDate={day.date()}
          month={day.format("MMM")}
          today={props.isToday(day)}
          currentMonth={props.currentMonth(day)}
          selected={props.selected}
          divRef={props.divRef}
          widthDay={props.widthDay}
        />
      ))}
    </div>
  );
};

export default Week;
