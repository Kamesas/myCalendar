import React, { Component } from "react";
import moment from "moment";
import CalendarMini from "./Calendar/CalendarMini";
import "moment/locale/ru";
moment.locale("ru");

class DatePicker extends Component {
  state = { moment: moment() };

  render() {
    return (
      <div className="date-picker">
        <CalendarMini
          className="calendar"
          moment={this.state.moment}
          selectedDay={this.props.selectedDay}
        />
      </div>
    );
  }
}

export default DatePicker;
