import React, { Component } from "react";
import DayNames from "./DayNames";
import Week from "./Week";
import moment from "moment";
import "./styles.css";

class Calendar extends Component {
  state = {
    month: moment(),
    selected: moment().startOf("day")
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

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone()
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={day => this.select(day)}
          selected={selected}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <section className="calendar">
        <header className="header">
          <div className="month-display row">
            <i className="arrow fa fa-angle-left" onClick={this.previous} />
            {this.renderMonthLabel()}
            <i className="arrow fa fa-angle-right" onClick={this.next} />
          </div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </section>
    );
  }
}

export default Calendar;
