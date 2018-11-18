import React, { Component } from "react";

class CalendarMini extends Component {
  state = {
    m: this.props.moment
  };

  nextWeek = () => {
    this.setState({ m: this.state.m.add(1, "w") });
  };

  renderMiniCalendar(m) {
    //const nowDate = m.date(); //цифра сегодняшней даты
    const mondayOfNowWeek = m
      .clone()
      .startOf("month")
      .day(1);

    let week = [];

    for (let i = 0; i <= 6; i++) {
      week.push(mondayOfNowWeek.clone().add(i, "day"));
    }

    const secondWeek = week[week.length - 1];

    console.log(secondWeek);
    return week; //.map(day => day.format("DD MMM"));
  }

  render() {
    return (
      <div className="calendar-mini">
        <button onClick={this.nextWeek} className="next-week">
          next
        </button>
        {this.state.m.format("DD MMMM")}
        <div className="week">
          {this.renderMiniCalendar(this.state.m).map(d => d.date())}
        </div>
      </div>
    );
  }
}

export default CalendarMini;
