import React, { Component } from "react";
import stl from "./Day.module.sass";
import moment from "moment";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { widthDay: "100%" };

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

  showFuulDay = day => {
    console.log(day.format("DD MM YYYY"));
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
      <div
        className={sunday + currentDay}
        style={{ height: this.state.widthDay }}
        ref={this.dayRef}
        onClick={() => this.showFuulDay(day)}
      >
        <span className={stl["first-week"]}>{firstW}</span>
        <div>
          <span className={stl["date"]}>{day.date()}</span>
          <span className={stl["first-day-month"]}>{firstDayInMonth}</span>
        </div>
      </div>
    );
  }
}

export default Day;
