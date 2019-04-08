import React, { Component } from "react";

// Import API requests
import { getUserAccount, createVideo } from "../../apiRequests";

class SaveVideo extends Component {
  submitVideo = () => {
    const {
      videoURL,
      videoThumbnail,
      videoTitle,
      notes,
      player,
      setError
    } = this.props;
    const videoDuration = player.getDuration();

    getUserAccount(({ data }) => {
      if (data.account) {
        const videoNotes = notes.map(note => (
          { text: note.text, timeStamp: note.timeStamp }
        ));
        
        const newVideoBody = {
          user: {
            _id: data.account.id
          },
          title: videoTitle,
          duration: Math.floor(videoDuration),
          url: videoURL,
          thumbnail: videoThumbnail.url,
          notes: videoNotes
        };

        createVideo(newVideoBody, ({ data }) => {
          if (data.error) {
            if (data.error.code === 11000) {
              setError("You have already saved that video.");
            } else {
              setError("An error occurred. Play this video and try again.");
            }
          } else {
            window.location.pathname = "/videos";
          }
        });
      }
    });
  }

  render() {
    return (
      <button type="button" className="btn ml-3" onClick={() => this.submitVideo()}>
        Save Notes
      </button>
    );
  }
}

export default SaveVideo;