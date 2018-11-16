import React, { Component } from "react";
import "./AddNotes.css";

class AddNote extends Component {
  state = {
    calendar: false,
    title: ""
  };

  pickDate = e => {
    this.setState({ calendar: true });
    e.target.value = this.props.selectedDay;
  };

  addTitle = e => {
    this.setState({
      calendar: false,
      title: e.target.value,
      descr: ""
    });
  };

  addDescr = e => {
    this.setState({
      calendar: false,
      descr: e.target.value
    });
  };

  saveNewNote = () => {
    const newNote = {
      id: new Date(),
      date: this.props.selectedDay,
      title: this.state.title,
      descr: this.state.descr
    };
    this.props.newNote(newNote);
    this.props.closeModal();
  };

  render() {
    return (
      <div className="AddNotes">
        <input
          type="text"
          placeholder="pick date"
          value={this.props.selectedDay}
          onChange={this.pickDate}
          onFocus={this.pickDate}
        />
        <input
          type="text"
          placeholder="заголовок заметки"
          onChange={this.addTitle}
        />
        <input
          type="text"
          placeholder="описание заметки"
          onChange={this.addDescr}
        />
        <button onClick={this.saveNewNote}>Save</button>
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
