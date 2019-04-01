import React, { Component } from "react";

// Import components
import NoteTaker from "./NoteTaker/NoteTaker.js"

class Landing extends Component {
  render() {
    const videoURL = "https://www.youtube.com/watch?v=rEdl2Uetpvo";
    const notes = [];

    return (
      <div className="row">
        <NoteTaker 
          videoURL={videoURL}
          notes={notes}
        />
      </div>
    );
  }
}

export default Landing;
