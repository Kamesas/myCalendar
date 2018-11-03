import React, { Component } from "react";
import ToolBar from "./ToolBar/ToolBar";
import Week from "./Week/Week";
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

        <Week
          moment={this.state.moment}
          isToday={this.isToday}
          currentMonth={this.currentMonth}
        />
      </div>
    );
  }
}

export default MyCalendar;
