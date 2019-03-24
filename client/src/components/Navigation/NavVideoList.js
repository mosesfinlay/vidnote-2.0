  import React, { Component } from "react";

// Import components
import VideoNavLink from "./VideoNavLink";

class NavVideoList extends Component {
  render() {
    const { videos } = this.props;
    let videoComponents = videos.map(({ id, text }) => <VideoNavLink key={id} text={text} /> );

    if (videoComponents.length === 0) {
      videoComponents = 
        <li className="nav-item" key={1}>
          <a className="nav-link" href="https://google.com">
            No videos yet!
          </a>
        </li>;
    }

    return (
      <React.Fragment>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1">
          <span>
            Videos
            <span className="text-muted">{` (${videos.length})`}</span>
          </span>
        </h6>
        <ul className="nav flex-column mb-2">
          {videoComponents}
        </ul>
      </React.Fragment>
    );
  }
}

export default NavVideoList;
