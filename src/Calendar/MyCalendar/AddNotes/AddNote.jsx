import React, { Component } from "react";
import "./AddNotes.css";

class AddNote extends Component {
  state = {};
  render() {
    return (
      <div className="AddNotes">
        <span className="close" onClick={this.props.closeModal}>
          <i className="fa fa-times-circle" />
        </span>
        <input type="text" placeholder="pick date" />
        <input type="text" placeholder="заголовок заметки" />
        <input type="text" placeholder="описание заметки" />
      </div>
    );
  }
}

export default AddNote;
