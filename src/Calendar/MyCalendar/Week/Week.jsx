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
          key={i}
          momentForDay={day.format()}
          firstWeek={props.firstWeek}
          dayName={day.format("ddd")}
          numDate={day.date()}
          month={day.format("MMM")}
          today={props.isToday(day)}
          currentMonth={props.currentMonth(day)}
          selected={props.selected}
        />
      ))}
    </div>
  );
};

export default Week;
