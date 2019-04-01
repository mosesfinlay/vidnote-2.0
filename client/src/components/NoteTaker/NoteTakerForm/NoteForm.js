import React, { Component } from "react";

class NoteForm extends Component {
  state = {
    text: "",
    buttonText: "🗒️"
  }

  handleInputChange = ({ target }) => {
    const { pauseVideo } = this.props;

    if (target.value.trim().length) {
      pauseVideo();
      this.setState({ 
        [target.name]: target.value,
        buttonText: "Resume"
      });
    } else {
      this.setState({ 
        [target.name]: target.value,
        buttonText: "🗒️"
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const { text } = this.state;
    const { playVideo, newNote, getCurrentTime } = this.props;

    if (text.trim().length) {
      this.setState({
        buttonText: "🗒️",
        text: ""
      });

      newNote({ text, timeStamp: getCurrentTime() });
      playVideo();
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="text" placeholder="Enter note" aria-label="Enter note" aria-describedby="basic-addon2" 
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn text-white" type="submit">{this.state.buttonText}</button>
          </div>
        </div>
      </form>
    );
  }
}

export default NoteForm;
