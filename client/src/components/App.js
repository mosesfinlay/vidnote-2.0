import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// Import required components
import Nav from "./Navigation/Nav";
import Account from "./User/Account";
import SignUpForm from "./Form/SignUpForm";
import LoginForm from "./Form/LoginForm";

class App extends Component {
  state = {
    isLoggedIn: false,
    userInfo: {
      name: "Joe Shmoe",
      email: "joe@shmoe.com"
    },
    videos: [
      { id: 1, text: "How to bake a cake" },
      { id: 2, text: "How to bake a cake" },
      { id: 3, text: "How to bake a cake" },
      { id: 4, text: "How to bake a cake" },
      { id: 5, text: "How to bake a cake" }
    ],
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Nav videos={this.state.videos} isLoggedIn={this.state.isLoggedIn} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-5 mt-5">
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/account" component={() => <Account userInfo={this.state.userInfo} />} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
