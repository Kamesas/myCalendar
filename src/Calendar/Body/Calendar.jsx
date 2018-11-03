import React, { Component } from "react";
import DayNames from "./DayNames";
import Week from "./Week";
import moment from "moment";
import "./styles.css";

class Calendar extends Component {
  state = {
    month: moment()
  };

  previous = () => {
    this.setState({
      month: this.state.month.subtract(1, "month")
    });
  };

  next = () => {
    this.setState({
      month: this.state.month.add(1, "month")
    });
  };

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Monday");
    let count = 0;
    let monthIndex = date.month();

    console.log();

    while (!done) {
      weeks.push(
        <Week key={date} date={date.clone()} month={this.state.month} />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    return (
      <span className="monthName">{this.state.month.format("MMMM YYYY")}</span>
    );
  }

  render() {
    return (
      <section className="calendar">
        <header className="header">
          <div className="month">
            <i
              className="monthArrow fa fa-angle-left"
              onClick={this.previous}
            />
            {this.renderMonthLabel()}
            <i className="monthArrow fa fa-angle-right" onClick={this.next} />
          </div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </section>
    );
  }
}

export default Calendar;
