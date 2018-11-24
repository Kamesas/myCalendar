import React, { Component } from "react";

class EditNote extends Component {
  state = {
    title: this.props.title,
    descr: this.props.descr,
    idNote: this.props.idNote,
    save: false
  };

  /* editTitle = e => {
    this.setState({ title: e.target.value });
  }; */

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveEditedNote = () => {
    const editedNote = {
      id: new Date(),
      date: this.props.momentForDay,
      title: this.state.title,
      descr: this.state.descr
    };

    this.props.newNote(editedNote);
    this.props.closeEdit();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.title !== this.props.title ||
      prevProps.descr !== this.props.descr
    ) {
      this.setState({ title: this.props.title, descr: this.props.descr });
    }
  }

  render() {
    return (
      <div className="edit-note">
        <input type="text" placeholder="описание заметки" />
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />

        <textarea
          name="descr"
          rows="2"
          value={this.state.descr}
          onChange={this.handleInputChange}
        />
        <button onClick={this.saveEditedNote}>Save</button>
      </div>
    );
  }
}

export default EditNote;
