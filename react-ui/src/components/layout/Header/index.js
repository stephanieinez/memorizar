import React, { Component } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import Close from "@material-ui/icons/Close";

const styles = {
  button: {
    position: "absolute",
    right: 20
  },
  info: {
    fontFamily: "Roboto",
    paddingLeft: 50,
    marginRight: 50,
    fontSize: 15,
    textAlign: "right",
    width: "90%"
  }
};

class Header extends Component {
  constructor() {
    super();
    this.state = { showInfo: false };
  }

  handleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    return (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Memorizar
          </Typography>
          {!this.state.showInfo ? (
            <IconButton
              color="inherit"
              style={styles.button}
              aria-label="Info"
              onClick={this.handleClick}
            >
              <Info />
            </IconButton>
          ) : (
            <IconButton
              onClick={this.handleClick}
              color="inherit"
              style={styles.button}
              aria-label="close"
            >
              {" "}
              <Close />
            </IconButton>
          )}
          {this.state.showInfo ? (
            <div style={styles.info}>
              See if you can translate the word in Spanish. If not, you can
              pause or click to see the word in English.
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
