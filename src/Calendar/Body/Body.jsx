import React, { Component } from "react";
import moment from "moment";

class Body extends Component {
  renderDay = () => {
    return "Day: ";
  };

  render() {
    const daysWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    const date = moment().date();
    const daysInPrevMonth = moment()
      .clone()
      .subtract(1, "month")
      .endOf("month")
      .date();
    const numberDayInWeek = moment()
      .clone()
      .date(1)
      .day();
    const daysInMonth = moment().daysInMonth();

    return (
      <div>
        <p>Дата: {date}</p>
        <p>Номер дня недели: {numberDayInWeek}</p>
        <p>Дней в месяце: {daysInMonth}</p>
        <p>Дней в предыдущем месяце: {daysInPrevMonth}</p>
        {console.log(daysInMonth)}
        <table className="table table-hover">
          <tbody>
            <tr>
              {daysWeek.map((day, i) => (
                <td key={i}>{day}</td>
              ))}
            </tr>
            <tr>
              <td>{this.renderDay()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Body;
