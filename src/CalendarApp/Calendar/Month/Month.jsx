import React, { Component } from "react";
import stl from "./Month.module.sass";
import { connect } from "react-redux";
import Day from "../Day/Day";

class Month extends Component {
  renderMonth(m) {
    const mondayOfNowWeek = m
      .clone()
      .startOf("month")
      .day(1);

    const lastDayOfWeekInNowMonth = m
      .clone()
      .endOf("month")
      .day(7)
      .format("DD MM YYYY");

    let week = [];

    let i = 0;
    do {
      week.push(mondayOfNowWeek.clone().add(i, "day"));
      i++;
    } while (
      week[week.length - 1].format("DD MM YYYY") !== lastDayOfWeekInNowMonth
    );

    return week.map((day, i) => (
      <Day
        key={day.format("DD MM YYYY")}
        day={day}
        notes={this.props.notes}
        firstWeek={i < 7 ? true : false}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className={stl["month"]}>
          {this.renderMonth(this.props.moment)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moment: state.getMomentJS,
  notes: state.getNotes
});

// const mapDispatchToProps = dispatch => ({
//   nextMonth: note => dispatch(addNote(note))
// });

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(Month);
