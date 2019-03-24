import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="mb-5">Sign Up for vdNote!</h1>
        <form method="POST" action="/user/signup">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn signup-btn text-white">Sign Up</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
