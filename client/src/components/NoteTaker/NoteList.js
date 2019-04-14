import React, { Component } from "react";

// Import components
import NoteListItem from "./NoteListItem";

class NoteList extends Component {
  render() {
    const { notes, deleteAllNotes, deleteNote, videoURL, seekTo } = this.props;

    return (
      <React.Fragment>
        {notes.length > 5 ?
          <p className="text-muted small px-auto mb-3">
            Scroll for more notes &nbsp;
            <i className="fas fa-angle-double-down"></i>
          </p>
          : null
        }

        {
          notes.length > 0 ? 
            <button className="btn text-muted bg-transparent px-1 pt-0 mb-3 border-0" 
              onClick={() => deleteAllNotes()}
            >Delete notes {"🗑"}</button>
          : null
        }
        <ul className="list-group mb-5 pb-5 pt-2 note-list">
          {notes.length === 0 ?
            <h5 className="text-secondary text-center mt-5">
              Nothing here yet!
              <br/>
              👈 Takes notes
            </h5>
          : notes.map(({ text, timeStamp }, index) => 
            <NoteListItem 
              key={index}
              text={text}
              timeStamp={timeStamp}
              deleteNote={deleteNote}
              id={index}
              videoURL={videoURL}
              seekTo={seekTo}
            />
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default NoteList;