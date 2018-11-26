import React, { Component } from "react";
import styles from "./Calendar.module.sass";
import { connect } from "react-redux";

class Calendar extends Component {
  state = {};
  render() {
    console.log(this.props.notes);
    return (
      <div className={styles["calendar"]}>
        <h1 className={styles["h1"]}>Calendar</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.getNotes
});

export default connect(mapStateToProps)(Calendar);
