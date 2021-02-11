import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar optionActive="home" />
        <div className="App_body">
        <Sidebar />
        <Feed />
        </div>
      </div>
    );
  }
}

export default App;
