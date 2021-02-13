import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

class App extends Component {
  render() {
    const user = "nitish";
    return (
      <div className="App">
        {!user ? <Login /> : <></>}
        <Navbar optionActive="home" />
        <div className="App_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    );
  }
}

export default App; 