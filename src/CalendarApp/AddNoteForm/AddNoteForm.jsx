import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../store/actions/actions";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";

class AddNoteForm extends Component {
  state = {
    date: "",
    time: "",
    title: "",
    descr: "",
    color: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
    console.log(this.state.color);
  };

  saveNewNote = e => {
    e.preventDefault();
    const newNote = {
      id: new Date(),
      date: this.state.date,
      time: this.state.time,
      title: this.state.title,
      descr: this.state.descr,
      color: this.state.color
    };

    this.props.addNote(newNote);
    console.log(newNote);
  };

  render() {
    console.log(this.props.getNotes);
    return (
      <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="select"
                name="color"
                id="exampleSelect"
                value={this.state.color}
                onChange={this.handleInputChange}
              >
                <option>blue</option>
                <option>red</option>
                <option>black</option>
                <option>green</option>
                <option>gold</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Input
                type="text"
                name="title"
                id="exampleText"
                placeholder="Title"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Input
                type="textarea"
                name="descr"
                id="exampleText"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <Button onClick={this.saveNewNote} color="primary" size="lg" block>
              Сохранить
            </Button>
          </Col>
          <Col md={6}>
            <Button color="warning" size="lg" block>
              Отменить
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(
  null,
  mapDispatchToProps
)(AddNoteForm);
