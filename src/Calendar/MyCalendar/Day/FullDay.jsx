import React, { Component } from "react";
import EditNote from "../EditNote/EditNote";

class FullDay extends Component {
  state = {
    edit: false,
    title: "",
    descr: "",
    idNote: ""
  };

  editNote = note => {
    this.setState({
      edit: true,
      title: note.title,
      descr: note.descr,
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
        <div style={{ textAlign: "center", fontSize: 20, marginBottom: 15 }}>
          Заметка за {this.props.momentForDay} число
        </div>

        {this.state.edit ? (
          <EditNote
            title={this.state.title}
            descr={this.state.descr}
            momentForDay={this.props.momentForDay}
            newNote={this.props.newNote}
            closeEdit={this.closeEdit}
          />
        ) : null}

        {this.props.notes.map((note, i) =>
          note.date === this.props.momentForDay ? (
            <div key={new Date() + note.title + i} className="li-tasks">
              <li className="note-title">
                <span>{note.time}</span> {note.title}
                <div style={{ float: "right", fontSize: 16 }}>
                  <i
                    className="fa fa-edit"
                    onClick={() => this.editNote(note)}
                  />
                  <i className="fa fa-plus-square" />
                  <i
                    onClick={() => this.props.deleteNote(note.id)}
                    className="fa fa-trash"
                  />
                </div>
              </li>
              <p>{note.descr}</p>
              <hr />
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default FullDay;
