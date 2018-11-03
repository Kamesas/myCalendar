import React, { Component } from "react";
import ToolBar from "./ToolBar/ToolBar";
import Day from "./Day/Day";
import moment from "moment";

// import momentRU from "moment/locale/ru";
// momentRU.locale("ru");

moment.locale("fr");

class MyCalendar extends Component {
  state = { moment: moment() };

  nextMonth = () => {
    this.setState({ momentnth: this.state.moment.add(1, "month") });
  };

  prevMonth = () => {
    this.setState({ moment: this.state.moment.subtract(1, "month") });
  };

  refreshCalendar = () => {
    this.setState({ moment: moment() });
  };

  renderWeek = () => {
    const week = [];
    const startDayInMonth = this.state.moment.day("Monday");
    //const today = moment().date() === day.date();

    for (let index = 0; index < 7; index++) {
      week.push(startDayInMonth.clone());
      startDayInMonth.add(1, "day");
    }

    console.log(week);

    return week.map((day, i) => {
      return (
        <Day
          key={i}
          dayName={day.format("ddd")}
          numDate={day.date()}
          today={this.isToday(day)}
          currentMonth={this.currentMonth(day)}
        />
      );
    });
  };

  isToday = day => {
    return moment().date() === day.date() && moment().month() === day.month()
      ? "today"
      : null;
  };

  currentMonth = day => {
    return moment().month() === day.month() ? null : "currentMonth";
  };

  renderMonth = () => {};

  render() {
    return (
      <div>
        <ToolBar
          month={this.state.moment.format("MMMM YYYY")}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          refreshCalendar={this.refreshCalendar}
        />
        {this.renderWeek()}
      </div>
    );
  }
}

export default MyCalendar;
