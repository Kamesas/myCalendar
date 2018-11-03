import React, { Component } from "react";
import Day from "./Day";

class Week extends Component {
  render() {
    let days = [];
    let { date } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 2),
        number: date.date(),
        isCurrentMonth: date.month() === this.props.month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };

      days.push(<Day key={date.toString()} day={day} />);

      date = date.clone();

      date.add(1, "day");
    }

    return <div className="week">{days}</div>;
  }
}

export default Week;
