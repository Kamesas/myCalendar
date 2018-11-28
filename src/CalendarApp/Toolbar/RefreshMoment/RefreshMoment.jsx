import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { refreshMoment } from "../../../store/actions/actions";

class RefreshMoment extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.refreshMoment} color="primary">
          Обновить
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  refreshMoment: () => dispatch(refreshMoment())
});

export default connect(
  null,
  mapDispatchToProps
)(RefreshMoment);
