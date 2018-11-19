import React, { Component } from "react";
import "./CalendarMini.css";

class CalendarMini extends Component {
  state = {
    m: this.props.moment,
    nowDate: this.props.moment.clone(),
    selectedDate: ""
  };

  nextMonth = () => {
    this.setState({ m: this.state.m.add(1, "M") });
  };

  prevMonth = () => {
    this.setState({ m: this.state.m.subtract(1, "M") });
  };

  reloadDate = () => {
    this.setState({ m: this.state.nowDate.clone(), selectedDate: "" });
  };

  prevYear = () => {
    this.setState({ m: this.state.m.subtract(1, "Y") });
  };

  nextYear = () => {
    this.setState({ m: this.state.m.add(1, "Y") });
  };

  selectedDate = date => {
    this.setState({ selectedDate: date });
    this.props.selectedDay(date);
  };

  renderMiniCalendar(m) {
    const mondayOfNowWeek = m
      .clone()
      .startOf("month")
      .day(1);

    const lastDayOfWeekInNowMonth = m
      .clone()
      .endOf("month")
      .day(7)
      .format("DD MM YYYY");

    let week = [];

    let i = 0;
    do {
      week.push(mondayOfNowWeek.clone().add(i, "day"));
      i++;
    } while (
      week[week.length - 1].format("DD MM YYYY") !== lastDayOfWeekInNowMonth
    );

    return week.map(day => (
      <div
        key={day.format("DD MM YYYY")}
        onClick={() => this.selectedDate(day.format("DD MM YYYY"))}
        className={`day-calendar-mini ${
          this.state.nowDate.format("DD MM YYYY") === day.format("DD MM YYYY")
            ? "today-calendar-mini"
            : ""
        } ${day.format("dd") === "вс" ? "day-red" : ""} ${
          this.state.selectedDate !== "" &&
          this.state.selectedDate === day.format("DD MM YYYY")
            ? "selected-day-calendar-mini"
            : ""
        }`}
      >
        {day.date()}
      </div>
    ));
  }

  render() {
    const dayName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    return (
      <div className="calendar-mini">
        <div className="change-year">
          <i
            className="yearArrow fa fa-angle-double-left"
            onClick={this.prevYear}
          />
          <div className="reload-calendar-mini">
            <i className="yearArrow fa fa-retweet" onClick={this.reloadDate} />
          </div>
          <i
            className="yearArrow fa fa-angle-double-right"
            onClick={this.nextYear}
          />
        </div>

        <div className="change-month">
          <i className="monthArrow fa fa-angle-left" onClick={this.prevMonth} />
          <div className="is-today">{this.state.m.format("MMMM YYYY")}</div>
          <i
            className="monthArrow fa fa-angle-right"
            onClick={this.nextMonth}
          />
        </div>

        <div className="week">
          {dayName.map((day, i) => (
            <div
              key={day}
              className={`day-calendar-mini ${i === 6 ? "day-red" : ""}`}
            >
              {day}
            </div>
          ))}
          {this.renderMiniCalendar(this.state.m)}
        </div>
      </div>
    );
  }
}

export default CalendarMini;
