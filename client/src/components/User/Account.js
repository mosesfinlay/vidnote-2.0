import React, { Component } from "react";

// Import API requests
import { getUserAccount } from "../../apiRequests";

// Import Components
import Error from "../Misc/Error";

class Account extends Component {
  state = {
    name: "",
    email: "",
    photo: "",
    error: {},
    onlyShowErrorMessage: false
  }

  componentDidMount() {
    getUserAccount(({ data }) => {
      if ("error" in data) {
        if (data.error.status === 403) {
          this.setState({
            name: null,
            email: null,
            photo: null,
            error: data.error,
            onlyShowErrorMessage: true
          });
          this.props.setLoggedInStatus(false);
        } 
      } else {
        this.setState({
          name: data.account.name,
          email: data.account.email,
          photo: data.account.photo,
          error: null,
          onlyShowErrorMessage: false
        });
        this.props.setLoggedInStatus(false);
      }
    });
  }

  render() {
    const { name, email, photo } = this.state;
    let error = "";

    // Error messages
    if (this.state.error !== null) {
      error = this.state.error.message;
    }

    if (this.state.onlyShowErrorMessage) {
      return <Error error={error} />;
    } else {
      return (
        <React.Fragment>
          <h1 className="mb-5">Account</h1>
          <Error error={error} />
          <img src={photo} className="mb-3 p-1 border rounded" alt="Profile Pic" />
          <p>Name: {name}</p>
          <p className="mb-5 pb-5">Email address: {email}</p>
        </React.Fragment>
      ); 
    }
  }
}

export default Account;
