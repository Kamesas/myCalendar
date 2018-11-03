import React, { Component } from "react";

import "./ToolBar.css";

class ToolBar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="month-name">
          <div className="today">Сегодня</div>
          <i
            className="monthArrow fa fa-angle-left"
            onClick={this.props.prevMonth}
          />
          <i
            className="monthArrow fa fa-angle-right"
            onClick={this.props.nextMonth}
          />
          <div className="toolbar-month">{this.props.month}</div>
        </div>
        <div className="btns-add-refresh">
          <button>Add</button>
          <button>Refresh</button>
        </div>
        <div className="search">
          <i className="fa fa-search" />
          <input type="text" placeholder="Событие, дата или участник" />
        </div>
      </div>
    );
  }
}

export default ToolBar;
