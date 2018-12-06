import React, { Component } from "react";
import stl from "./Day.module.sass";
import moment from "moment";
import FullDay from "../FullDay/FullDay";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { widthDay: "100%", showFulDay: false };

    this.dayRef = React.createRef();
  }

  componentDidMount() {
    this.widthHeigth();
    this.onResize();
  }

  widthHeigth = () => {
    this.setState({ widthDay: this.dayRef.current.clientWidth });
  };

  onResize = () => {
    window.addEventListener("resize", this.widthHeigth);
  };

  closeDayModal = () => {
    this.setState({ showFulDay: false });
  };

  showDayModal = () => {
    this.setState({ showFulDay: true });
  };

  renderFullDay = day => {
    return this.state.showFulDay ? (
      <FullDay
        day={day}
        closeDayModal={this.closeDayModal}
        notes={this.props.notes}
      />
    ) : null;
  };

  renderNotes = () => {
    return (
      <ul>
        {this.props.notes.map(note =>
          note.date === this.props.day.format("YYYY-MM-DD") ? (
            <li key={note.id}>{note.title}</li>
          ) : null
        )}
      </ul>
    );
  };

  render() {
    const { day, firstWeek } = this.props;
    const currentDay =
      moment().format("DD MM YYYY") === day.format("DD MM YYYY")
        ? stl["current-day"]
        : "";
    const sunday = day.day() === 0 ? stl["red"] : "";
    const firstW = firstWeek ? this.props.day.format("dd") : null;
    const firstDayInMonth =
      this.props.day.date() === 1 ? day.format("MMM") : null;

    return (
      <div>
        {this.renderFullDay(day)}
        <div
          className={sunday + currentDay}
          style={{ height: this.state.widthDay }}
          ref={this.dayRef}
          onClick={this.showDayModal}
        >
          <span className={stl["first-week"]}>{firstW}</span>
          <div>
            <span className={stl["date"]}>{day.date()}</span>
            <span className={stl["first-day-month"]}>{firstDayInMonth}</span>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
