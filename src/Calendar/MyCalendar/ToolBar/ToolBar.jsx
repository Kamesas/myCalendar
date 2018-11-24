import React, { Component } from "react";

import "./ToolBar.css";

class ToolBar extends Component {
  state = {
    notes: "",
    showNotes: false
  };

  search = e => {
    this.props.getSearchEl(e.target.value);

    if (e.target.value !== "") {
      this.setState({ showNotes: true });
    } else {
      this.setState({ showNotes: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.notes !== this.props.notes) {
      this.setState({ notes: this.props.notes });
    }
  }

  clickOnFoundedNote = note => {
    console.log(note);
    //this.setState({ showNotes: false });
  };

  onFocusOut = e => {
    this.setState({ showNotes: false });

    e.target.value = "";
    this.props.getSearchEl("");
  };

  show = () => {
    return this.state.notes !== ""
      ? this.state.notes.map(note => (
          <li key={note.id} onClick={() => this.clickOnFoundedNote(note.title)}>
            <div>{note.date}</div>
            {note.title}
            <div>{note.descr}</div>
          </li>
        ))
      : null;
  };

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
          <button onClick={this.props.addNote}>Add</button>
          <button onClick={this.props.refreshCalendar}>Refresh</button>
        </div>
        <div className="search" onBlur={this.onFocusOut}>
          <i className="fa fa-search" />
          <input
            type="text"
            placeholder="Событие или дата"
            onChange={this.search}
          />
          <ul className="finded-notes">
            {this.state.showNotes ? this.show() : null}
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}

export default ToolBar;
