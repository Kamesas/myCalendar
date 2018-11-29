import React from "react";
import AddNoteForm from "../../AddNoteForm/AddNoteForm";
import ModalWindow from "../../Modal/Modal";

export default class AddNoteBtn extends React.Component {
  render() {
    return (
      <div>
        <ModalWindow>
          <AddNoteForm />
        </ModalWindow>
      </div>
    );
  }
}
