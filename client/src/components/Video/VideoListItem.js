import React, { Component } from "react";
import { Link } from "react-router-dom";

class Video extends Component {
  render() {
    const { title, duration, url, thumbnail, id } = this.props;
    const videoDuration = Math.ceil(duration / 60);

    return (
      <div className="col-sm-4 mb-3">
        <div className="card">
          <img src={thumbnail} className="card-img-top" alt="YouTube Video Thumbnail" />
          <div className="card-body pb-3">
            <a href={url} className="text-reset">
              <h5 className="card-title">{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h5>
            </a>
            <p className="card-text">{videoDuration} min watch</p>
            <Link to={`/videos/${id}`} className="btn mr-3 mb-1">View Notes</Link>
            <Link to={`/videos/${id}/delete`} className="btn mb-1">Delete Video</Link>
          </div>
        </div>
      </div>
    );
  }
}
       
export default Video;