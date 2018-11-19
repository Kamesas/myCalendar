import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  state = {
    timeNow: this.props.timeNow.format("HH : mm"),
    hour: this.props.timeNow.format("HH"),
    minutes: this.props.timeNow.format("mm")
  };

  addHour = () => {
    this.setState({ hour: this.props.timeNow.add(1, "H").format("HH") });
  };

  subHour = () => {
    this.setState({ hour: this.props.timeNow.subtract(1, "H").format("HH") });
  };

  addMinutes = () => {
    this.setState({ minutes: this.props.timeNow.add(1, "m").format("mm") });
  };

  subMinutes = () => {
    this.setState({
      minutes: this.props.timeNow.subtract(1, "m").format("mm")
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.hour !== this.state.hour ||
      prevState.minutes !== this.state.minutes
    ) {
      this.setState(
        { timeNow: `${this.state.hour} : ${this.state.minutes}` },
        this.props.selectedTime(`${this.state.hour}  :  ${this.state.minutes}`)
      );
    }
  }

  render() {
    return (
      <div>
        <div className="time">
          <div className="btns-hours">
            <i className="fa fa-angle-up" onClick={this.addHour} />
            {this.state.hour}
            <i className="fa fa-angle-down" onClick={this.subHour} />
          </div>
          <div> : </div>
          <div className="btns-minutes">
            <i className="fa fa-angle-up" onClick={this.addMinutes} />
            {this.state.minutes}
            <i className="fa fa-angle-down" onClick={this.subMinutes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
