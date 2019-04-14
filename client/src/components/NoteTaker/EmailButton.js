import React, { Component } from "react";
import secstamp from "secstamp";

// Import API requests
import { getUserAccount } from "../../apiRequests";

class EmailButton extends Component {
  state = {
    account: {}
  }

  componentDidMount() {
    getUserAccount(({ data }) => {
      if (data.status === 200) {
        this.setState({ account: data.account });
      }
    });
  }
  
  render() {
    const { notes, videoURL } = this.props;
    const { account } = this.state;

    let emailTo = "";
    let emailSubject = "Notes From vidnote";

    // Check that the user has info
    if (account.name !== undefined) {
      emailTo = account.email;
      emailSubject = `Notes From vidnote - by ${account.name}`;
    }

    let emailBody = ``;

    notes.forEach((note, index) => {
      emailBody += `${index + 1}. ${note.text} - ${secstamp(note.timeStamp)} \r\n%0D%0A`;
    });

    emailBody += `\r\n%0D%0A \r\n%0D%0A These notes were based on this video: ${videoURL}`;
    
    return (
      <a className="text-reset text-decoration-none" href={`mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`}>
        <button type="button" className="btn btn-border">Email Notes</button>
      </a>
    );
  }
}

export default EmailButton;