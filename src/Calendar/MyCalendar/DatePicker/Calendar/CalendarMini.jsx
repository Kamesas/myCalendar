import React, { Component } from "react";

class CalendarMini extends Component {
  state = {
    m: this.props.moment
  };

  nextMonth = () => {
    this.setState({ m: this.state.m.add(1, "M") });
  };

  prevMonth = () => {
    this.setState({ m: this.state.m.subtract(1, "M") });
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

    return week;
  }

  render() {
    return (
      <div className="calendar-mini">
        <button onClick={this.prevMonth} className="next-week">
          prev
        </button>
        {this.state.m.format("DD MMMM")}
        <button onClick={this.nextMonth} className="next-week">
          next
        </button>

        <div className="week">
          {this.renderMiniCalendar(this.state.m).map((d, i) =>
            i === 6 || i === 13 || i === 20 || i === 27 || i === 34 ? (
              <span key={d.format("DD MM YYYY")}>
                <span>{d.format("DD ")}</span>
                <br />
              </span>
            ) : (
              <span key={d.format("DD MM YYYY")}>{d.format("DD")}</span>
            )
          )}
        </div>
      </div>
    );
  }
}

export default CalendarMini;
