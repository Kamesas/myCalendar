import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//import Calendar from "./Body/Calendar";
import MyCalendar from "./MyCalendar/MyCalendar";
//import moment from "moment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="containe">
        <MyCalendar />
      </div>
    );
  }
}

export default App;
