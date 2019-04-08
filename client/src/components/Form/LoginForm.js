import React, { Component } from "react";

// Import API requests
import { getUserAccount } from "../../apiRequests";

// Import components
import Error from "../Misc/Error";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: {},
    onlyShowErrorMessage: false
  }

  componentDidMount() {
    getUserAccount(({ data }) => {
      if (data.status === 200) {
        this.setState({
          error: {
            message: "You are already signed in."
          },
          onlyShowErrorMessage: true
        });
        this.props.setLoggedInStatus(true);
      } else {
        this.setState({
          error: null,
          onlyShowErrorMessage: false
        });
        this.props.setLoggedInStatus(false);
      }
    });
  }

  render() {
    let error = "";

    // Error messages
    if (this.state.error !== null) {
      error = this.state.error.message;
    }

    if (this.state.onlyShowErrorMessage) {
      return (
        <div className="col-md-6 mx-auto mt-5">
          <Error error={error} />
        </div>
      );
    } else {
      return (
        <div className="col-md-6 mx-auto my-5 pb-5">
          <h1 className="mb-5">Login</h1>
          
          <Error error={error} />

          <a href="/api/auth/twitter" className="btn mr-3 mb-3">Login with Twitter</a>
          or
          <a href="/api/auth/facebook" className="btn ml-3 mb-3">Login with Facebook</a>
        </div>
      );
    }
  }
}

export default LoginForm;
