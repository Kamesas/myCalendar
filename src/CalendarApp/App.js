import React, { Component } from "react";
import styles from "./App.module.sass";
import Toolbar from "./Toolbar/Toolbar";
import Calendar from "./Calendar/Calendar";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  moment: state.getMomentJS
});

export default connect(mapStateToProps)(App);
