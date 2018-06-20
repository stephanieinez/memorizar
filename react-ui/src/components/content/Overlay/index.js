import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

const styles = {
  wordList: {
    paddingBottom: 7,
    fontFamily: "Roboto",
    width: 400
  },
  word: {
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  overlay: {
    marginTop: 10
  },
  textField: {
    marginBottom: 50,
    marginLeft: 25,
    width: 200
  }
};

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.handleChange = debounce(this.handleChange, 100);

    this.state = {
      open: false,
      search: ""
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    event.persist();
    this.setState({ search: event.target.value });
  };

  render() {
    const { search } = this.state;

    const filteredWords = this.props.wordList.words.filter(
      word => word.es.indexOf(search) === 0
    );

    return (
      <Fragment>
        <Button onClick={this.handleClickOpen} style={styles.overlay}>
          Mira todas las palabras
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Diccionario"}</DialogTitle>
          <TextField
            label="Search"
            style={styles.textField}
            value={this.state.search}
            onChange={this.handleChange}
          />
          <DialogContent>
            {filteredWords.map((word, i) => (
              <div style={styles.wordList} key={i}>
                <span style={styles.word}>{word.es}</span>: {word.en}
              </div>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

Overlay.defaultProps = {
  wordList: { words: [] }
};

Overlay.propTypes = {
  wordList: PropTypes.object.isRequired //eslint-disable-line
};

export default Overlay;
