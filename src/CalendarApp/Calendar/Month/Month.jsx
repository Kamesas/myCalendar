import React, { Component } from "react";
import stl from "./Month.module.sass";
import { connect } from "react-redux";
import Day from "../Day/Day";

class Month extends Component {
  state = { moment: this.props.moment };

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

    return week.map(day => (
      <Day key={day.format("DD MM YYYY")} date={day.date()} />
    ));
  }

  render() {
    return (
      <div style={{ height: this.state.widthDay }} className={stl["month"]}>
        {this.renderMonth(this.state.moment)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moment: state.getMomentJS
});

// const mapDispatchToProps = dispatch => ({
//   addNote: note => dispatch(addNote(note))
// });

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(Month);
