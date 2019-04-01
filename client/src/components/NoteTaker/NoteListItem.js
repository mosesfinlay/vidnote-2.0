import React, { Component } from "react";
import secstamp from "secstamp";
import copy from "copy-text-to-clipboard";

class NoteListItem extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    $("[data-toggle='tooltip']").tooltip();
  }

  render() {
    const { text, timeStamp, deleteNote, id } = this.props;
    const noteTimeStamp = secstamp(timeStamp);
    
    return (
      <li className="list-group-item mb-3 ml-2">
        <div className="d-flex justify-content-between">
          <span className="small text-muted mb-1">{`⏱️ ${noteTimeStamp}`}</span>
        
          <div>
            <button className="btn bg-transparent px-1 pt-0" 
              data-toggle="tooltip" 
              data-placement="top" 
              title="Tweet"
            >
              <p className="twitter-blue mb-0"><i className="fab fa-twitter"></i></p>
            </button>
            <button className="btn bg-transparent px-1 pt-0" 
              onClick={() => copy(text)}
              data-toggle="tooltip" 
              data-placement="top" 
              title="Copy"
            >{"📋"}</button>
            <button className="btn bg-transparent px-1 pt-0"
              onClick={() => deleteNote(id)}
              data-toggle="tooltip" 
              data-placement="top" 
              title="Delete"
            >{"🗑️"}</button>
          </div>
        </div>
        <span className="mr-3">{text}</span>
      </li>
    );
  }
}

export default NoteListItem;