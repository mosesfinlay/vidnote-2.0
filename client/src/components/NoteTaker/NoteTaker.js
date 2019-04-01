import React, { Component } from "react";
import YouTube from "react-player";

// Import components
import URLForm from "./NoteTakerForm/URLForm";
import NoteForm from "./NoteTakerForm/NoteForm";
import EmailButton from "./EmailButton";
import NoteList from "./NoteList";

class NoteTaker extends Component {
  state = {
    videoURL: "https://www.youtube.com/watch?v=rEdl2Uetpvo",
    player: null,
    notes: []
  }

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

  // YouTube
  setVideoURL = url => this.setState({ videoURL: url });
  playVideo = () => this.state.player.getInternalPlayer().playVideo();
  pauseVideo = () => this.state.player.getInternalPlayer().pauseVideo();
  getCurrentTime = () => this.state.player.getInternalPlayer().getCurrentTime();
  playerOnReady = player => {
    this.setState({ player });
  }

  render() {
    const { videoURL, notes } = this.state;

    return (
      <React.Fragment>
        <div className="col-lg-6">
          <h3 className="mb-4">Take Notes</h3>
          <hr />
          <div className="border rounded p-3 bg-white mb-5">
            <div className="embed-responsive embed-responsive-16by9 border mb-4">
              <YouTube 
                url={videoURL}
                onReady={this.playerOnReady}
                controls={true}
                height="360"
              />
            </div>
            <URLForm
              setVideoURL={this.setVideoURL}
            />
            <NoteForm
              playVideo={this.playVideo}
              pauseVideo={this.pauseVideo}
              newNote={this.newNote}
              getCurrentTime={this.getCurrentTime}
            />
            <EmailButton
              notes={notes}
              videoURL={videoURL}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="mb-4">
            Notes
            <span className="small text-muted">{` (${notes.length})`}</span>
          </h3>
          <NoteList
            notes={notes}
            deleteNote={this.deleteNote}
            deleteAllNotes={this.deleteAllNotes}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NoteTaker;
