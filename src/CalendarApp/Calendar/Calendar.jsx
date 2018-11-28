import React, { Component } from "react";
import styles from "./Calendar.module.sass";
import Month from "./Month/Month";

class Calendar extends Component {
  render() {
    return (
      <div className={styles["calendar"]}>
        <Month />
      </div>
    );
  }
}

export default Calendar;
