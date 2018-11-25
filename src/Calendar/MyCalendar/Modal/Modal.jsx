import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal-component">
      <div className="modal-overaly" onClick={closeModal} />
      <div className="modal">
        <span className="close" onClick={closeModal}>
          <i className="fa fa-times-circle" />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
