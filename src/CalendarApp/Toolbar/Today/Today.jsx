import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import stl from "./Today.module.sass";
import { connect } from "react-redux";
import { nextMonth, prevMonth, addNum } from "../../../store/actions/actions";

class Today extends React.Component {
  render() {
    return (
      <div className={stl["today"]}>
        <span onClick={this.props.prevMonth} className={stl["left-arr"]}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>

        <span onClick={this.props.nextMonth} className={stl["rigth-arr"]}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <span className={stl["now-date"]}>
          {this.props.getMomentJS.format("MMMM YYYY")}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getMomentJS: state.getMomentJS
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  prevMonth: () => dispatch(prevMonth())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
