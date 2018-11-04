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

  renderMonth = () => {
    let month = [];
    let propsMonent = this.state.moment.clone().startOf("month");

    let m = this.state.moment
      .clone()
      .startOf("month")
      .day("Monday");

    let done = false;
    let count = 0;
    let monthIndex = m.month();

    while (!done) {
      month.push(
        <Week
          key={m}
          moment={propsMonent}
          isToday={this.isToday}
          currentMonth={this.currentMonth}
        />
      );
      m.add(1, "w");

      done = count++ > 2 && monthIndex !== m.month();
      monthIndex = m.month();
    }

    return month;
  };

  render() {
    return (
      <div>
        <ToolBar
          month={this.state.moment.format("MMMM YYYY")}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          refreshCalendar={this.refreshCalendar}
        />
        {this.renderMonth()}
      </div>
    );
  }
}

export default MyCalendar;
