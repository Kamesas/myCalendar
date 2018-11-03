import React, { Component } from "react";
import ToolBar from "./ToolBar/ToolBar";
import moment from "moment";

class MyCalendar extends Component {
  state = { moment: moment() };

  nextMonth = () => {
    this.setState({ momentnth: this.state.moment.add(1, "month") });
  };

  prevMonth = () => {
    this.setState({ moment: this.state.moment.subtract(1, "month") });
  };

  render() {
    return (
      <div>
        <ToolBar
          month={this.state.moment.format("MMMM YYYY")}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
        />
      </div>
    );
  }
}

export default MyCalendar;
