import React, { Component } from "react";
import DatePicker from "../DatePicker/DatePicker";
import "./AddNotes.css";

class AddNote extends Component {
  state = {
    calendar: false,
    title: "",
    descr: "",
    selectedDay: "",
    selectedTime: ""
  };

  showCalendar = () => {
    this.setState({ calendar: true });
  };

  hideCalendar = () => {
    this.setState({ calendar: false });
  };

  selectedDay = selected => {
    if (typeof selected === "string") {
      this.setState({ selectedDay: selected });
    }
  };

  selectedTime = selected => {
    if (typeof selected === "string") {
      this.setState({ selectedTime: selected });
    }
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

  resetAddForm = () => {
    this.setState({ title: "", descr: "", selectedDay: "", selectedTime: "" });
    console.log(this.state.title);
  };

  saveNewNote = () => {
    const newNote = {
      id: new Date(),
      date: this.state.selectedDay,
      time: this.state.selectedTime,
      title: this.state.title,
      descr: this.state.descr
    };
    this.props.newNote(newNote);
    this.props.closeModal();
  };

  render() {
    return (
      <div className="AddNotes">
        <div className="inputs-date-time">
          <input
            type="text"
            placeholder="выберите дату"
            value={this.state.selectedDay}
            onChange={this.selectedDay}
            onFocus={this.showCalendar}
          />
          <input
            type="text"
            placeholder="выберите время"
            value={this.state.selectedTime}
            onFocus={this.selectedTime}
            onChange={this.selectedTime}
          />
        </div>

        <input
          type="text"
          placeholder="заголовок заметки"
          value={this.state.title}
          onFocus={this.hideCalendar}
          onChange={this.addTitle}
        />
        <textarea
          placeholder="описание заметки"
          value={this.state.descr}
          onFocus={this.hideCalendar}
          onChange={this.addDescr}
          name="text"
          rows="3"
        />
        <div className="btns-add-form">
          <button onClick={this.saveNewNote} className="btn-save">
            Сохранить
          </button>
          <button onClick={this.resetAddForm} className="btn-reset">
            сбросить
          </button>
        </div>
        {this.state.calendar ? (
          <div className="modal-calendar">
            <DatePicker
              selectedDay={this.selectedDay}
              selectedTime={this.selectedTime}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddNote;
