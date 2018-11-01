import React, { Component } from "react";
import moment from "moment";

class Header extends Component {
  state = {};
  render() {
    const m = moment();
    return (
      <div>
        <h1>Calendar</h1>
        <div>
          <span>Сегодня</span> <i className="fa fa-angle-left" />
          {""}
          <i className="fa fa-angle-right" /> {m.format("MMMM YYYY")}
        </div>
      </div>
    );
  }
}

export default Header;
