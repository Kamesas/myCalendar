import React, { Component } from "react";

class Day extends Component {
  render() {
    return (
      <span
        className={
          "day" +
          (this.props.day.isToday ? " today" : "") +
          (this.props.day.isCurrentMonth ? "" : " different-month")
        }
      >
        {this.props.day.number}
        {this.props.day.name}
      </span>
    );
  }
}

export default Day;
