import React, { Component } from "react";

// Import API requests
import { getUserAccount, postUserLogin } from "../../apiRequests";

// Import components
import Error from "../Misc/Error";

class NewVideo extends Component {
  state = {
    title: "",
    videoLink: "",
    error: {},
    onlyShowErrorMessage: false
  }

  componentDidMount() {
    getUserAccount(({ data }) => {
      if (data.status === 200) {
        this.setState({
          error: null,
          onlyShowErrorMessage: false
        });
        this.props.setLoggedInStatus(true);
      } else {
        this.setState({
          error: {
            message: "You are not authorized to view this page."
          },
          onlyShowErrorMessage: true
        });
        this.props.setLoggedInStatus(false);
      }
    });
  }

  handleInputChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = e => {
    e.preventDefault();
    
    const { title, videoLink } = this.state;
    const { history } = this.props;

    // postUserLogin({ title, videoLink }, ({ data }) => {
    //   if (data.error) {
    //     this.setState({ error: data.error });
    //   } else {
    //     this.setState({ error: null });
    //     this.props.setLoggedInStatus(true);
    //     history.push(`video/${data.video._id}`);
    //   }
    // });
    console.log(title, videoLink);
  }
  
  render() {
    let isMongoDuplicateError = false;
    let error = "";

    // Error messages
    if (this.state.error !== null) {
      // Checks that a user does not already exist with the credentials provided 
      if ("code" in this.state.error) {
        isMongoDuplicateError = this.state.error.code === 11000;
      }

      if (isMongoDuplicateError) {
        error = "Oops, it looks like that video already exists. Try logging in."
      } else {
        error = this.state.error.message;
      }
    }

    if (this.state.onlyShowErrorMessage) {
      return <Error error={error} />;
    } else {
      return (
        <React.Fragment>
          <h1 className="mb-5">New Video</h1>
          
          <Error error={error} />

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" name="title" id="title" placeholder="Enter title" 
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="videoLink">YouTube Video Link</label>
              <input type="url" className="form-control" name="videoLink" id="videoLink" placeholder="YouTube Video Link" 
                value={this.state.videoLink}
                onChange={this.handleInputChange}
              />
            </div>
            
            <button type="submit" className="btn text-white">Create Video</button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default NewVideo;
