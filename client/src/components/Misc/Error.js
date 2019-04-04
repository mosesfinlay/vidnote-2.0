import React, { Component } from "react";

class Error extends Component {
  render() {
    const { error } = this.props;

    if (!error) {
      return null;
    } else {
      return (
        <h5 className="text-danger my-4">{error}</h5>
      );
    }
    
  }
}

export default Error;
