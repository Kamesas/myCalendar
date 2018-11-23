import React, { Component } from "react";

class EditNote extends Component {
  state = {
    title: this.props.title,
    idNote: this.props.idNote,
    save: false
  };

  editTitle = e => {
    this.setState({ title: e.target.value });
  };

  saveEditedNote = () => {
    const editedNote = {
      id: new Date(),
      date: this.props.momentForDay,
      title: this.state.title
    };

    this.props.newNote(editedNote);
    this.props.closeEdit();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.title !== this.props.title) {
      this.setState({ title: this.props.title });
    }
  }

  render() {
    return (
      <div className="edit-note">
        <input type="text" value={this.state.title} onChange={this.editTitle} />
        <input type="text" />
        <textarea rows="2" />
        <button onClick={this.saveEditedNote}>Save</button>
      </div>
    );
  }
}

export default EditNote;
