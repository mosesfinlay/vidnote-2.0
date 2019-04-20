import React, { Component } from "react";
import secstamp from "secstamp";
import copy from "copy-text-to-clipboard";

class NoteListItem extends Component {
  render() {
    const { text, timeStamp, deleteNote, id, videoURL, seekTo } = this.props;
    const noteTimeStamp = secstamp(timeStamp);

    return (
      <li className="list-group-item mb-3 mx-2 rounded">
        <div className="d-flex justify-content-between">
          <span className="small text-muted mb-1 timestamp" onClick={() => {
            seekTo(timeStamp)
          }}>{`⏱️ ${noteTimeStamp}`}</span>
        
          <div>
            <button className="btn bg-transparent px-1 pt-0 border-0">
              <a 
                href={`http://twitter.com/home?status="${text}" - ${videoURL}=${timeStamp}s via @vdnote`} 
                className="twitter-blue mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </button>
            <a 
              href={`${videoURL}&t=${timeStamp}s`} 
              className="text-reset px-1 text-decoration-none youtube-red" 
              target="_blank" 
              rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <button className="btn bg-transparent px-1 pt-0 border-0" onClick={() => {
              alert("Copied!");
              copy(text);
            }} >
              <i className="far fa-copy"></i>
            </button>
            <button className="btn bg-transparent px-1 pt-0 border-0" onClick={() => deleteNote(id)} >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <span className="mr-3">{text}</span>
      </li>
    );
  }
}

export default NoteListItem;