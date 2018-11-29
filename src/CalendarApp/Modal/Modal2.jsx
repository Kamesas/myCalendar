import React from "react";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";
import AddNoteForm from "../AddNoteForm/AddNoteForm";

class ModalWindow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        {
          <Button bsStyle="primary" onClick={this.handleShow}>
            Добавить2
          </Button>
        }

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавьте новую запись</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNoteForm />
            <Button
              bsStyle="warning"
              bsSize="large"
              onClick={
                this.handleClose //block
              }
            >
              Отменить
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
