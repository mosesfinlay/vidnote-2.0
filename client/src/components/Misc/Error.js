import React, { Component } from "react";

class Error extends Component {
  render() {
    const { error } = this.props;

    return (
      <h5 className="text-danger">{error}</h5>
    );
  }
}

export default Error;
