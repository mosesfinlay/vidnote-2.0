import React, { Component } from "react";
import { Link } from "react-router-dom"

// Import API requests
import { getUserAccount } from "../../apiRequests";

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
        if (data.error.status === 403) {
          this.setState({
            name: null,
            email: null,
            error: data.error,
            onlyShowErrorMessage: true
          });
          this.props.setLoggedInStatus(false);
        } 
      } else {
        this.setState({
          videos: [
            { title: "How to ride a bike", duration: 480, id: 0 },
            { title: "How to bake a cake", duration: 563, id: 1 },
            { title: "How to remove a toilet", duration: 480, id: 2 },
            { title: "How to ride a bike", duration: 789, id: 3 },
            { title: "How to build an airplane", duration: 231, id: 4 },
            { title: "How to melt gold", duration: 563, id: 5 },
            { title: "What to do with a million dollars", duration: 355, id: 6 },
            { title: "How to climb a hill", duration: 345, id: 7 },
            { title: "Baseball 101", duration: 890, id: 8 },
            { title: "How to ride a bike", duration: 480, id: 9 },
            { title: "How to bake a cake", duration: 563, id: 10 },
            { title: "How to remove a toilet", duration: 480, id: 11 },
            { title: "How to ride a bike", duration: 789, id: 12 },
            { title: "How to build an airplane", duration: 231, id: 13 },
            { title: "How to melt gold", duration: 563, id: 14 },
            { title: "What to do with a million dollars", duration: 355, id: 15 },
            { title: "How to climb a hill", duration: 345, id: 16 },
            { title: "Baseball 101", duration: 890, id: 17 },
          ],
          error: null,
          onlyShowErrorMessage: false
        });
        this.props.setLoggedInStatus(false);
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

          <Link className="btn text-white mb-3" to="/">New Video</Link>

          <ul className="list-group mb-5">
            {videos.map(({ title, duration, id }, index) => 
              <Video 
                title={title}
                duration={duration}
                key={index}
                id={id}
              />
            )}
          </ul>
        </React.Fragment>
      ); 
    }
  }
}
       
export default Videos;