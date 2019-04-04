import React, { Component } from "react";
import secstamp from "secstamp";
import copy from "copy-text-to-clipboard";

class NoteListItem extends Component {
  render() {
    const { text, timeStamp, deleteNote, id, videoURL } = this.props;
    const noteTimeStamp = secstamp(timeStamp);

    return (
      <li className="list-group-item mb-3 ml-2">
        <div className="d-flex justify-content-between">
          <a href={`${videoURL}&t=${timeStamp}s`} className="text-reset text-decoration-none" target="_blank" rel="noopener noreferrer">
            <span className="small text-muted mb-1">{`⏱️ ${noteTimeStamp}`}</span>
          </a>
        
          <div>
            <button className="btn bg-transparent px-1 pt-0">
              <p className="twitter-blue mb-0">
                <i className="fab fa-twitter"></i>
              </p>
            </button>
            <button className="btn bg-transparent px-1 pt-0" onClick={() => copy(text)} >{"📋"}</button>
            <button className="btn bg-transparent px-1 pt-0" onClick={() => deleteNote(id)} >{"🗑️"}</button>
          </div>
        </div>
        <span className="mr-3">{text}</span>
      </li>
    );
  }
}

export default NoteListItem;