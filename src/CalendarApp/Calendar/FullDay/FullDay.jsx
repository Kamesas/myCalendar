import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import AddNoteBtn from "../../Toolbar/AddNoteBtn/AddNoteBtn";
import { connect } from "react-redux";
import { delNote } from "../../../store/actions/actions";
import AddNoteForm from "../../AddNoteForm/AddNoteForm";

class FullDay extends Component {
  state = {
    editing: false,
    editNote: {}
  };

  deleteNote = id => {
    this.props.delNote(id);
  };

  editNote = note => {
    const editNote = {
      update: true,
      title: note.title,
      descr: note.descr,
      date: note.date,
      time: note.time,
      id: note.id
    };

    this.setState({ editing: true, editNote: editNote });
  };

  closeEdit = () => {
    this.setState({ editing: false });
  };

  renderNotes = () => {
    return (
      <ul>
        {this.props.notes.map(note =>
          note.date === this.props.day.format("YYYY-MM-DD") ? (
            <li key={note.id}>
              {note.title}
              <button onClick={() => this.deleteNote(note.id)}>X</button>
              <button onClick={() => this.editNote(note)}>edit</button>
            </li>
          ) : null
        )}
      </ul>
    );
  };

  render() {
    return (
      <div className="full-day-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{this.props.day.format("DD MMMM YYYY")}</Modal.Title>
            <AddNoteBtn />
          </Modal.Header>

          <Modal.Body>
            {this.state.editing && (
              <div>
                <button onClick={this.closeEdit}>closeEdit</button>
                <AddNoteForm
                  editNote={this.state.editNote}
                  closeEdit={this.closeEdit}
                />
              </div>
            )}
            {this.renderNotes()}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.closeDayModal} bsStyle="warning">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moment: state.getMomentJS,
  notes: state.getNotes
});

const mapDispatchToProps = dispatch => ({
  delNote: note => dispatch(delNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullDay);
