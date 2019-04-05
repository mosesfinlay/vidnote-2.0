import React, { Component } from "react";
import YouTube from "react-player";
import axios from "axios";

// Import components
import URLForm from "./NoteTakerForm/URLForm";
import NoteForm from "./NoteTakerForm/NoteForm";
import SaveVideo from "./SaveVideo";
import UpdateVideo from "./UpdateVideo";
import EmailButton from "./EmailButton";
import NoteList from "./NoteList";
import Error from "../Misc/Error";
import { getOneVideo } from "../../apiRequests";

class NoteTaker extends Component {
  state = {
    videoURL: "",
    videoThumbnail: null,
    videoTitle: "",
    player: null,
    notes: [],
    error: null,
    onlyShowError: false
  }

  // Notes
  newNote = note => this.setState(prevState => prevState.notes.unshift(note));
  deleteNote = noteId => this.setState(prevState => {
    const { notes } = prevState;

    notes.forEach((item, index) => {
      if (noteId === index) {
        notes.splice(notes[index], 1);
      }
    });

    return { notes: prevState.notes };
  });
  deleteAllNotes = () => this.setState({ notes: [] });

  // Errors
  setError = err => {
    if (err) {
      this.setState({ 
        error: err,
        onlyShowError: false
      });
    } else {
      this.setState({ 
        error: null,
        onlyShowError: false
      });
    }
  }

  // YouTube
  setVideoURL = url => this.setState({ videoURL: url });
  playVideo = () => this.state.player.getInternalPlayer().playVideo();
  pauseVideo = () => this.state.player.getInternalPlayer().pauseVideo();
  getCurrentTime = () => Math.floor(this.state.player.getInternalPlayer().getCurrentTime());
  playerOnReady = player => {
    const videoId = this.state.videoURL.replace("https://www.youtube.com/watch?v=", "");

    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,statistics&fields=items(id,snippet,statistics)`)
      .then(res => {
        this.setState({ 
          videoTitle: res.data.items[0].snippet.title,
          videoThumbnail: res.data.items[0].snippet.thumbnails.standard,
          player
        });
      });
  }

  componentDidMount() {
    const { match } = this.props;

    if (match !== null) {
      getOneVideo(match.params.videoId, ({ data }) => {
        if (data.error) {
          this.setState({ error: data.error.message, onlyShowError: true });
        } else {
          this.setState({ 
            error: null, 
            onlyShowError: false,
            videoURL: data.video.url,
            notes: data.video.notes,
            videoTitle: data.video.title,
            videoThumbnail: data.video.thumbnail
          });
        }
      });
    } else {
      this.setState({
        videoURL: "https://www.youtube.com/watch?v=Tq96cQvIsIA"
      })
    }
  }

  render() {
    const { 
      notes, 
      videoURL,
      videoThumbnail,
      videoTitle,
      player,
      error,
      onlyShowError
    } = this.state;

    let saveVideo = null;

    if (this.props.loggedIn) {
      saveVideo = 
        <SaveVideo 
          notes={notes}
          videoURL={videoURL}
          videoThumbnail={videoThumbnail}
          videoTitle={videoTitle}
          player={player}
          setError={this.setError}
        />
      ;
    }

    if (onlyShowError) {
      return (
        <Error error={error} />
      );
    } else {
      return (
        <React.Fragment>
          <div className="col-lg-6 pb-5">
            <h5 className="mb-4 text-muted">{this.state.videoTitle}</h5>
            <hr />
            {
              error ?
                <Error error={error} />
              : null
            }
            <div className="border rounded p-3 bg-white mb-5">
              <div className="embed-responsive embed-responsive-16by9 border mb-4">
                <YouTube 
                  url={videoURL}
                  onReady={this.playerOnReady}
                  controls={true}
                  height="360"
                />
              </div>
              {this.props.disableUrlForm ? null:
                <URLForm
                  setVideoURL={this.setVideoURL}
                  setError={this.setError}
                />
              }
              <NoteForm
                playVideo={this.playVideo}
                pauseVideo={this.pauseVideo}
                newNote={this.newNote}
                getCurrentTime={this.getCurrentTime}
              />
              <div className="d-flex justify-content-end">
                <EmailButton
                  notes={notes}
                  videoURL={videoURL}
                />
                {
                  this.props.match !== null ?
                    <UpdateVideo 
                      match={this.props.match}
                      notes={notes}
                    />
                  : saveVideo
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <h3 className="mb-4">
              Notes
              <span className="small text-muted">{` (${notes.length})`}</span>
            </h3>
            <NoteList
              videoURL={videoURL}
              notes={notes}
              deleteNote={this.deleteNote}
              deleteAllNotes={this.deleteAllNotes}
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default NoteTaker;
