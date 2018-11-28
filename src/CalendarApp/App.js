import React, { Component } from "react";
import styles from "./App.module.sass";
import Toolbar from "./Toolbar/Toolbar";
import Calendar from "./Calendar/Calendar";
import AddNoteForm from "./AddNoteForm/AddNoteForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className={styles["app"]}>
          <AddNoteForm />
          <Toolbar />

          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
