import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Calendar from "./Body/Calendar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Calendar />
      </div>
    );
  }
}

export default App;
