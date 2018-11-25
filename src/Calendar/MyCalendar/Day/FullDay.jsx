import React, { Component } from "react";
import EditNote from "../EditNote/EditNote";

class FullDay extends Component {
  state = {
    edit: false,
    title: "",
    descr: "",
    date: "",
    time: "",
    idNote: ""
  };

  addNote = () => {
    alert("добавлениев разработке");
  };

  editNote = note => {
    this.setState({
      edit: true,
      title: note.title,
      descr: note.descr,
      date: note.date,
      time: note.time,
      idNote: note.id
    });
  };

  delNote = () => {
    this.props.deleteNote(this.state.idNote);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.notes.length !== this.props.notes.length) {
      this.delNote();
    }
  }

  closeEdit = () => {
    this.setState({ edit: false });
  };

  render() {
    return (
      <div className="full-day">
        <div className="full-day-today">
          Заметка за <span>{this.props.momentForDay}</span> число
          {/* <div onClick={this.addNote}>
            ADD <i className="fa fa-plus-square" />
          </div> */}
        </div>
        {this.state.edit ? (
          <EditNote
            title={this.state.title}
            descr={this.state.descr}
            time={this.state.time}
            date={this.state.date}
            momentForDay={this.props.momentForDay}
            newNote={this.props.newNote}
            closeEdit={this.closeEdit}
          />
        ) : null}
        {this.props.notes.map((note, i) =>
          note.date === this.props.momentForDay ? (
            <div key={new Date() + note.title + i} className="li-tasks">
              <li className="note-title">
                {note.time ? (
                  <span className="titleTime">{note.time}</span>
                ) : null}
                <span className="titleName">{note.title}</span>
                <i className="fa fa-edit" onClick={() => this.editNote(note)} />
                <i
                  onClick={() => this.props.deleteNote(note.id)}
                  className="fa fa-trash"
                />
              </li>
              <p>{note.descr}</p>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default FullDay;
