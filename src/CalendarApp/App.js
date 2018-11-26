import React, { Component } from "react";
import styles from "./App.css";
import Toolbar from "./Toolbar/Toolbar";
import Calendar from "./Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Toolbar />
        <Calendar />
      </div>
    );
  }
}

export default App;
