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
    const { setVideoURL } = this.props;

    if (url.indexOf("https://www.youtube.com/watch?v=") !== -1 || 
        url.indexOf("https://m.youtube.com/watch?v=") !== -1) {
          setVideoURL(url);
        }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input type="url" className="form-control" name="url" placeholder="YouTube video URL" aria-label="Enter note" aria-describedby="basic-addon2" 
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

export default URLForm;
