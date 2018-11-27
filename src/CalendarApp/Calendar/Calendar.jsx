import React, { Component } from "react";
import styles from "./Calendar.module.sass";
import { connect } from "react-redux";
import Month from "./Month/Month";

class Calendar extends Component {
  renderNotes() {
    return (
      <ul>
        {this.props.notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={styles["calendar"]}>
        <Month />
        {this.renderNotes()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.getNotes,
  moment: state.getMomentJS
});

export default connect(mapStateToProps)(Calendar);
