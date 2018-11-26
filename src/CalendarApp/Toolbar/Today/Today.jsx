import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import stl from "./Today.module.sass";
import { connect } from "react-redux";

class Today extends React.Component {
  state = {
    moment: this.props.moment
  };

  prevMonth = () => {
    this.setState({ moment: this.state.moment.subtract(1, "M") });
  };

  nextMonth = () => {
    this.setState({ moment: this.state.moment.add(1, "M") });
  };

  render() {
    return (
      <div className={stl["today"]}>
        <span onClick={this.prevMonth} className={stl["left-arr"]}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>

        <span onClick={this.nextMonth} className={stl["rigth-arr"]}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <span className={stl["now-date"]}>
          {this.state.moment.format("MMMM YYYY")}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moment: state.getMomentJS
});

/* const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
}); */

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(Today);
