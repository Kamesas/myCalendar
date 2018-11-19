import React, { Component } from "react";
import DatePicker from "../DatePicker/DatePicker";
import "./AddNotes.css";

class AddNote extends Component {
  state = {
    calendar: false,
    title: "",
    descr: "",
    selectedDay: ""
  };

  showCalendar = () => {
    this.setState({ calendar: true });
  };

  selectedDay = selected => {
    this.setState({ selectedDay: selected });
  };

  addTitle = e => {
    this.setState({
      calendar: false,
      title: e.target.value
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
      date: this.state.selectedDay,
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
          value={this.state.selectedDay}
          onChange={this.selectedDay}
          onFocus={this.showCalendar}
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
            <DatePicker selectedDay={this.selectedDay} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddNote;
