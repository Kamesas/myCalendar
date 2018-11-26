import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <FontAwesomeIcon icon={faCalendarCheck} />
        <Badge color="secondary">New</Badge>
      </div>
    );
  }
}

export default App;
