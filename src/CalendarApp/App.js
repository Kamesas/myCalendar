import React, { Component } from "react";
import styles from "./App.module.sass";
import Toolbar from "./Toolbar/Toolbar";
import Calendar from "./Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className={styles["app"]}>
          <Toolbar />

          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
