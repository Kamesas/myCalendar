import React from "react";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";

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
            Добавить
          </Button>
        }

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавьте новую запись</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
            {/*  <Button
              bsStyle="warning"
              bsSize="large"
              block
              onClick={this.handleClose}
            >
              Отменить
            </Button> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
