import React, { Component } from "react";

// Import API requests
import { getUserAccount, updateVideo } from "../../apiRequests";

class UpdateVideo extends Component {
  submitVideo = () => {
    const {
      notes
    } = this.props;

    getUserAccount(({ data }) => {
      if (data.account) {
        const videoNotes = notes.map(note => (
          { text: note.text, timeStamp: note.timeStamp }
        ));
        const updateVideoBody = { notes: videoNotes };

        updateVideo(this.props.match.params.videoId, updateVideoBody, () => 
          window.location.pathname = "/videos"
        );
      }
    });
  }

  render() {
    return (
      <button type="button" className="btn mr-3 btn-border" onClick={() => this.submitVideo()}>
        Update Notes
      </button>
    );
  }
}

export default UpdateVideo;