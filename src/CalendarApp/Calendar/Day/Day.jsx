import React, { Component } from "react";
//import ChangeMoment from "../../../HOC/ChangeMoment";

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

  render() {
    return (
      <div
        //className={day.format("DD MM YYYY") === sunday ? "red" : "black"}
        style={{ height: this.state.widthDay }}
        ref={this.dayRef}
      >
        {this.props.date}
      </div>
    );
  }
}

export default Day;
