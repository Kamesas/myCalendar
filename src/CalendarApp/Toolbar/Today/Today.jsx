import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import stl from "./Today.module.sass";
import ChangeMoment from "../../../HOC/ChangeMoment";
import { connect } from "react-redux";

class Today extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={stl["today"]}>
        <span onClick={this.props.prevMonth} className={stl["left-arr"]}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>

        <span onClick={this.props.prevMonth} className={stl["rigth-arr"]}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>

        <span className={stl["now-date"]}>
          {this.props.moment.format("MMMM YYYY")}
        </span>
      </div>
    );
  }
}

export default ChangeMoment(Today);

// const mapStateToProps = state => ({
//   moment: state.getMomentJS
// });

/* const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
}); */

// export default ChangeMoment(
//   connect(
//     mapStateToProps
//     //mapDispatchToProps
//   )(Today)
// );
