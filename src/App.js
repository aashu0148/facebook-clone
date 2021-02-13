import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {!this.props.user ? <Redirect to="/login" /> : <Redirect to="/" />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Navbar optionActive="home" />
              <div className="App_body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
