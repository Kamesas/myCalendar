import React, { Component } from "react";
import "./AddNotes.css";

class AddNote extends Component {
  state = { calendar: false };

  pickDate = () => {
    this.setState({ calendar: true });
  };

  render() {
    return (
      <div className="AddNotes">
        <input type="text" placeholder="pick date" onFocus={this.pickDate} />
        <input type="text" placeholder="заголовок заметки" />
        <input type="text" placeholder="описание заметки" />
        <button>Save</button>
        {this.state.calendar ? this.props.calendar : null}
      </div>
    );
  }
}

export default AddNote;
