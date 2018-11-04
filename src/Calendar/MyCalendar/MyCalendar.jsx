import React, { Component } from "react";
import ToolBar from "./ToolBar/ToolBar";
import Week from "./Week/Week";
import moment from "moment";
import notes from "./notes";

// import momentRU from "moment/locale/ru";
// momentRU.locale("ru");

moment.locale("fr");

class MyCalendar extends Component {
  state = {
    moment: moment(),
    notes: notes
  };

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

  selectedDay = day => {
    alert(day);
  };

  renderMonth = () => {
    let month = [];

    let propsMonent = this.state.moment.clone().startOf("month");

    let m = this.state.moment
      .clone()
      .startOf("month")
      .day("Monday");

    let stopRenderMonth = false;
    let count = 0;
    let monthIndex = m.month();

    while (!stopRenderMonth) {
      month.push(
        <Week
          key={m}
          notes={this.state.notes}
          firstWeek={month.length === 0 ? true : false}
          moment={propsMonent}
          isToday={this.isToday}
          currentMonth={this.currentMonth}
          selected={this.selectedDay}
        />
      );

      m.add(1, "w");

      stopRenderMonth = count++ > 2 && monthIndex !== m.month();
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
        <div className="month">{this.renderMonth()}</div>
      </div>
    );
  }
}

export default MyCalendar;
