import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Sidebar />
      </div>
    );
  }
}

export default App;
