import React, { Component } from "react";
import moment from "moment";

function ChangeMoment(WrapComponent) {
  return class ChangeMoment extends Component {
    state = { moment: moment() };

    prevMonth = () => {
      this.setState(prevState => {
        return { moment: prevState.moment.subtract(1, "M") };
      });
    };

    nextMonth = () => {
      this.setState(prevState => {
        return { moment: prevState.moment.add(1, "M") };
      });
    };

    componentDidUpdate(prevProps, prevState) {
      console.log(this.state.moment);
      if (prevState.moment !== this.state.moment) {
        console.log(1);
      }
    }

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
      );
    }
  };
}

export default ChangeMoment;
