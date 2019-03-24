import React, { Component } from "react";

class Account extends Component {
  render() {
    const { userInfo } = this.props;
    const { name } = userInfo;
    const { email } = userInfo;

    return (
      <React.Fragment>
        <h1 className="mb-5">Account</h1>
        <form method="POST" action="/user/update">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" value={name} />
          </div>
          <div className="form-group mb-5">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" value={email} />
          </div>
          <h4 className="mb-4">Reset your password</h4>
          <div className="form-group">
            <label for="exampleInputPassword1">Old Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Old Password" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">New Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="New Password" />
          </div>
          <button type="submit" className="btn signup-btn text-white">Update Account</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Account;
