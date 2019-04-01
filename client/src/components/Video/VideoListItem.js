import React, { Component } from "react";
import { Link } from "react-router-dom";

class Video extends Component {
  render() {
    const { title, duration, id } = this.props;
    const videoDuration = Math.ceil(duration / 60);

    return (
      <Link className="text-reset text-decoration-none mb-3" to={`/videos/${id}`}>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {title}
          <span className="text-muted">{videoDuration} min.</span>
        </li>
      </Link>
    );
  }
}
       
export default Video;