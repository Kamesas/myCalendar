import React, { Component } from "react";
import stl from "./Toolbar.module.sass";
import { Row, Col, Badge } from "reactstrap";
import Today from "./Today/Today";
import RefreshMoment from "./RefreshMoment/RefreshMoment";
import AddNoteBtn from "./AddNoteBtn/AddNoteBtn";

class Toolbar extends Component {
  //state = {};
  render() {
    return (
      <Row>
        <div className={stl["toolbar"]}>
          <Col md={4}>
            <div className={stl["left"]}>
              <Badge className={stl["badge"]} color="secondary">
                Сегодня
              </Badge>
              <Today />
            </div>
          </Col>

          <Col md={8}>
            <div className={stl["rigth"]}>
              <AddNoteBtn />
              <RefreshMoment />
            </div>
          </Col>
        </div>
      </Row>
    );
  }
}

export default Toolbar;
