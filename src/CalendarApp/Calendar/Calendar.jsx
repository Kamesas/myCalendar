import React, { Component } from "react";
import styles from "./Calendar.module.sass";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div className={styles["calendar"]}>
        <h1 className={styles["h1"]}>Calendar</h1>
      </div>
    );
  }
}

export default Calendar;
