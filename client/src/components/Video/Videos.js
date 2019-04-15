import React, { Component } from "react";
import { Link } from "react-router-dom"

// Import API requests
import { getUserAccount, getAllVideos } from "../../apiRequests";

// Import Components
import Video from "./VideoListItem";
import Error from "../Misc/Error";

class Videos extends Component {
  state = {
    videos: [],
    error: {},
    onlyShowErrorMessage: false
  }

  componentDidMount() {
    getUserAccount(({ data }) => {
      if ("error" in data) {
        this.setState({ error: data.error, onlyShowErrorMessage: true });
        this.props.setLoggedInStatus(false);
      } else {
        getAllVideos(({ data }) => {
          this.setState({ 
            videos: data.notes, 
            error: null, 
            onlyShowErrorMessage: false 
          });
        
          this.props.setLoggedInStatus(false);
        });
      }
    });
  }

  render() {
    const { videos } = this.state;
    let error = "";

    // Error messages
    if (this.state.error !== null) {
      error = this.state.error.message;
    }

    if (this.state.onlyShowErrorMessage) {
      return <Error error={error} />;
    } else {
      return (
        <React.Fragment>
          <h1 className="mb-5">Videos</h1>
          <Error error={error} />

          <Link className="btn btn-border mb-3" to="/">New Video</Link>
          
          <div className="row mb-5">
            {videos.map(({ title, duration, url, thumbnail, _id }, index) => 
                <Video 
                  title={title}
                  duration={duration}
                  key={index}
                  id={_id}
                  thumbnail={thumbnail}
                  url={url}
                />
              )
            }
          </div>
        </React.Fragment>
      ); 
    }
  }
}
       
export default Videos;