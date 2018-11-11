import React from "react";
import "./Modal.css";
import AddNote from "../AddNotes/AddNote";

const Modal = ({ closeModal }) => {
  return (
    <div>
      <div className="wrap-modal" onClick={closeModal} />
      <AddNote closeModal={closeModal} />
    </div>
  );
};

export default Modal;
