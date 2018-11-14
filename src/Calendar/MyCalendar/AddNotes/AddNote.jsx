import React, { Component } from "react";
import "./AddNotes.css";

class AddNote extends Component {
  state = { calendar: false };

  pickDate = e => {
    this.setState({ calendar: true });
    e.target.value = this.props.selectedDay;
  };

  addTitle = () => {
    this.setState({ calendar: false });
  };

  addDescr = () => {
    this.setState({ calendar: false });
  };

  render() {
    return (
      <div className="AddNotes">
        <input
          type="text"
          placeholder="pick date"
          value={this.props.selectedDay}
          onFocus={this.pickDate}
        />
        <input
          type="text"
          placeholder="заголовок заметки"
          onFocus={this.addTitle}
        />
        <input
          type="text"
          placeholder="описание заметки"
          onFocus={this.addDescr}
        />
        <button>Save</button>
        {this.state.calendar ? (
          <div className="modal-calendar">
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
            {this.props.calendar}
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddNote;
