import React, { Component } from "react";

// Import components
import NoteTaker from "./NoteTaker/NoteTaker"

class Landing extends Component {
  render() {
    return (
      <div className="row">
        <NoteTaker
          match={null}
          loggedIn={this.props.loggedIn}
          disableUrlForm={false}
          updateVideo={false}
        />
      </div>
    );
  }
}

export default Landing;
