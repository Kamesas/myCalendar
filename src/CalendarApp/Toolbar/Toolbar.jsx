import React, { Component } from "react";
import stl from "./Toolbar.module.sass";
import { Row, Col } from "reactstrap";
import { Badge } from "reactstrap";
import Today from "./Today/Today";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={4}>
          <div className={stl["toolbar"]}>
            <div className={stl["left"]}>
              <Badge className={stl["badge"]} color="secondary">
                Сегодня
              </Badge>
              <Today />
            </div>
          </div>
        </Col>

        <Col md={8}>Rigth</Col>
      </Row>
    );
  }
}

export default Toolbar;
