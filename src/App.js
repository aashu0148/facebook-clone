import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App"
              <Navbar optionActive="home" />
        {/* <Navbar /> */}
      <div className="App_body">
      <Sidebar />
      </div>  
    </div>
    );
  }
}

export default App;
