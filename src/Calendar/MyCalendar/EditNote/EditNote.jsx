import React, { Component } from "react";
import InputMask from "react-input-mask";

class EditNote extends Component {
  state = {
    title: this.props.title,
    descr: this.props.descr,
    idNote: this.props.idNote,
    time: this.props.time,
    date: this.props.date,
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
      //date: this.props.momentForDay,
      title: this.state.title,
      descr: this.state.descr,
      date: this.state.date,
      time: this.state.time
    };

    this.props.newNote(editedNote);
    this.props.closeEdit();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.title !== this.props.title ||
      prevProps.descr !== this.props.descr ||
      prevProps.date !== this.props.date ||
      prevProps.time !== this.props.time
    ) {
      this.setState({
        title: this.props.title,
        descr: this.props.descr,
        date: this.props.date,
        time: this.props.time !== undefined ? this.props.time : ""
      });
    }
  }

  render() {
    return (
      <div className="edit-note">
        <InputMask
          mask="99 99 9999"
          maskChar={null}
          name="date"
          value={this.state.date}
          onChange={this.handleInputChange}
        />
        <InputMask
          mask="99 : 99"
          maskChar={null}
          name="time"
          value={this.state.time !== undefined ? this.state.time : ""}
          onChange={this.handleInputChange}
        />

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
          placeholder="описание заметки"
        />
        <button onClick={this.saveEditedNote}>Save</button>
      </div>
    );
  }
}

export default EditNote;
