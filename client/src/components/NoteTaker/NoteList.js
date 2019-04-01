import React, { Component } from "react";

// Import components
import NoteListItem from "./NoteListItem";

class NoteList extends Component {
  render() {
    const { notes, deleteAllNotes, deleteNote } = this.props;

    return (
      <React.Fragment>
        <hr />
        {notes.length > 5 ?
          <p className="text-muted small px-auto mb-3">
            Scroll for more notes
            <i className="fas fa-angle-double-down"></i>
          </p>
          : 
            null
        }

        {
          notes.length > 0 ? 
            <button className="btn text-muted bg-transparent px-1 pt-0 mb-3" 
              onClick={() => deleteAllNotes()}
            >Clear all {"🗑"}</button>
          : null
        }
        <ul className="list-group mb-5 pb-5 note-list">
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
            />
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default NoteList;