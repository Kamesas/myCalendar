import React, { Component } from "react";

class DayNames extends Component {
  render() {
    const daysWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    return (
      <div className="dayNames">
        {daysWeek.map((day, i) => (
          <span className="dayNamesItem" key={i}>
            {day}
          </span>
        ))}
      </div>
    );
  }
}

export default DayNames;
