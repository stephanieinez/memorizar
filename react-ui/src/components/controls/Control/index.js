import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import socket from "../../../socket";

class Control extends Component {
  constructor() {
    super();
    this.state = { pauseButton: false };
  }

  handleClickPause = () => {
    this.setState({ pauseButton: true });
    socket.emit("pause");
  };

  handleClickResume = () => {
    this.setState({ pauseButton: false });
    socket.emit("resume");
  };

  render() {
    return (
      <Fragment>
        {!this.state.pauseButton ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClickPause}
          >
            Pause
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickResume}
          >
            Resume
          </Button>
        )}
      </Fragment>
    );
  }
}

export default Control;

// needs to be able to send an action to the websocket
// websocket on the server when it recieves the pause action
// setInterval should do nothing
// then when they click the action to unpause setInterval should resume
