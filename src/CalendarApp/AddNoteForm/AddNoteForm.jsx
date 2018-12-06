import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, updateNote } from "../../store/actions/actions";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";

class AddNoteForm extends Component {
  static defaultProps = {
    editNote: ""
  };

  state = {
    date:
      this.props.editNote !== ""
        ? this.props.editNote.date
        : this.props.moment.format("YYYY-MM-DD"),
    time:
      this.props.editNote !== ""
        ? this.props.editNote.time
          ? this.props.editNote.time
          : ""
        : "",
    title: this.props.editNote !== "" ? this.props.editNote.title : "",
    descr:
      this.props.editNote !== ""
        ? this.props.editNote.descr
          ? this.props.editNote.descr
          : ""
        : "",
    color: this.props.editNote !== "" ? this.props.editNote.color : "blue",
    update: this.props.editNote !== "" ? this.props.editNote.update : false
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

    if (this.state.title === "") {
      alert("Напишите заголовок заметки");
    } else {
      this.props.addNote(newNote);
      alert("Сохранено");
      this.resetAddForm();
    }
  };

  updateNote = e => {
    e.preventDefault();
    const id = this.props.editNote.id;
    const newNote = {
      date: this.state.date,
      time: this.state.time,
      title: this.state.title,
      descr: this.state.descr,
      color: this.state.color
    };

    if (this.state.title === "") {
      alert("Напишите заголовок заметки");
    } else {
      this.props.updateNote(id, newNote);
      alert("Обновлено");
      this.props.closeEdit();
      //console.log(id, newNote);
      //this.resetAddForm();
    }
  };

  resetAddForm = () => {
    this.setState({
      title: "",
      descr: "",
      time: ""
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Input
                type="date"
                name="date"
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
                placeholder="time placeholder"
                value={this.state.time}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="select"
                name="color"
                value={this.state.color}
                onChange={this.handleInputChange}
              >
                <option>синий</option>
                <option>белый</option>
                <option>зеленый</option>
                <option>красный</option>
                <option>черный</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Input
            invalid
            type="text"
            name="title"
            placeholder="заголовок заметки"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            name="descr"
            placeholder="описание заметки"
            value={this.state.descr}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        {this.state.update ? (
          <Button onClick={this.updateNote} color="success" size="lg" block>
            Перезаписать
          </Button>
        ) : (
          <Button onClick={this.saveNewNote} color="primary" size="lg" block>
            Сохранить
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moment: state.getMomentJS
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
  updateNote: (id, note) => dispatch(updateNote(id, note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNoteForm);
