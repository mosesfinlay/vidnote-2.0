import React, { Component } from "react";

class URLForm extends Component {
  state = {
    url: "",
    buttonText: "🎬"
  }

  handleInputChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();
    
    const { url } = this.state;
    const { setVideoURL, setError } = this.props;
    let id = "";
    
    if (url.indexOf("https://www.youtube.com/watch?v=") !== -1) {
      id = url.replace("https://www.youtube.com/watch?v=", "");

    } else if (url.indexOf("https://m.youtube.com/watch?v=") !== -1) {
      id = url.replace("https://m.youtube.com/watch?v=", "");

    } else if (url.indexOf("https://youtu.be/") !== -1) {
      id = url.replace("https://youtu.be/", "");

    }
    
    setError(false);
    setVideoURL(`https://www.youtube.com/watch?v=${id}`);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input type="url" className="form-control" name="url" placeholder="YouTube video URL" aria-label="Enter note" aria-describedby="basic-addon2" 
            value={this.state.url}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-border" type="submit">{this.state.buttonText}</button>
          </div>
        </div>
      </form>
    );
  }
}

export default URLForm;
