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

// const ChangeMoment = (props = {}, WrapComponent) => {
//   class EnhancedComponent extends Component {
//     render() {
//       return <WrapComponent {...props} {...this.props} />;
//     }
//   }

//   return EnhancedComponent;
// };

export default ChangeMoment;
