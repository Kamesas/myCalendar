import React, { Component } from "react";
import "./Day.css";

class Day extends Component {
  render() {
    return (
      <div className={this.props.today + " " + this.props.currentMonth}>
        {this.props.dayName} => {this.props.numDate}
      </div>
    );
  }
}

export default Day;
