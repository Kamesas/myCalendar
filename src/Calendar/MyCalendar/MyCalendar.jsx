import React, { Component } from "react";
import ToolBar from "./ToolBar/ToolBar";
import Week from "./Week/Week";
import moment from "moment";
import notes from "./notes";
import AddNote from "./AddNotes/AddNote";
import Modal from "./Modal/Modal";

import "moment/locale/ru";
moment.locale("ru");

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
      notes: notes,
      widthDay: "100%",
      addNoteWindow: false,
      selectedDay: "",
      gotSearchEl: "",
      finded: ""
    };
    this.dayDivRef = React.createRef();
  }

  getSearchEl = e => {
    this.setState({ finded: e });
  };

  search(notes) {
    if (this.state.finded.length === 0) {
      return notes;
    }

    return notes.filter(el => {
      return el.title.indexOf(this.state.finded) > -1;
    });
  }

  newNote = newNote => {
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  saveToLocalStorage = () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  };

  componentDidMount() {
    this.widthHeigth();
    this.onResize();

    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      this.setState({
        notes: savedNotes
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.saveToLocalStorage();
    }
  }

  deleteNote = idNote => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== idNote)
    });
  };

  closeModal = () => {
    this.setState({ addNoteWindow: false });
  };

  widthHeigth = () => {
    this.setState({ widthDay: this.dayDivRef.current.clientWidth });
  };

  onResize = () => {
    window.addEventListener("resize", this.widthHeigth);
  };

  nextMonth = () => {
    this.setState({ momentnth: this.state.moment.add(1, "month") });
  };

  prevMonth = () => {
    this.setState({ moment: this.state.moment.subtract(1, "month") });
  };

  refreshCalendar = () => {
    this.setState({ moment: moment() });
  };

  isToday = day => {
    return moment().date() === day.date() && moment().month() === day.month()
      ? "today"
      : null;
  };

  currentMonth = day => {
    return moment().month() === day.month() ? null : "currentMonth";
  };

  selectedDay = day => {
    this.setState({
      selectedDay: day
    });
  };

  addNote = () => {
    this.setState({
      addNoteWindow: true,
      selectedDay: ""
    });
  };

  renderMonth = () => {
    let month = [];

    let propsMonent = this.state.moment.clone().startOf("month");

    let m = this.state.moment
      .clone()
      .startOf("month")
      .day(1);

    let stopRenderMonth = false;
    let count = 0;
    let monthIndex = m.month();

    while (!stopRenderMonth) {
      month.push(
        <Week
          key={m}
          notes={this.search(this.state.notes)}
          firstWeek={month.length === 0 ? true : false}
          moment={propsMonent}
          isToday={this.isToday}
          currentMonth={this.currentMonth}
          selected={this.selectedDay}
          divRef={this.dayDivRef}
          widthDay={this.state.widthDay}
          deleteNote={this.deleteNote}
        />
      );

      m.add(1, "w");

      stopRenderMonth = count++ > 2 && monthIndex !== m.month();
      monthIndex = m.month();
    }

    return month;
  };

  render() {
    let calendar = <div className="month">{this.renderMonth()}</div>;

    return (
      <div>
        {this.state.addNoteWindow ? (
          <Modal closeModal={this.closeModal}>
            <AddNote
              renderMonth={this.renderMonth}
              calendar={calendar}
              month={this.state.moment.format("MMMM YYYY")}
              nextMonth={this.nextMonth}
              prevMonth={this.prevMonth}
              selectedDay={this.state.selectedDay}
              newNote={this.newNote}
              closeModal={this.closeModal}
            />
          </Modal>
        ) : null}
        <ToolBar
          month={this.state.moment.format("MMMM YYYY")}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          refreshCalendar={this.refreshCalendar}
          addNote={this.addNote}
          getSearchEl={this.getSearchEl}
        />

        {calendar}
      </div>
    );
  }
}

export default MyCalendar;
