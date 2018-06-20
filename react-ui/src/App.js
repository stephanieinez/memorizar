import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Footer } from "./components/layout";
import { Word, Overlay } from "./components/content";
import { Control } from "./components/controls";
import { changeWord } from "./redux/action";

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      showEn: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/wordList")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error getting content");
        }
        return response.json();
      })
      .then(response => {
        this.setState({ response });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  // this is controled by the tab on the Footer -
  // and is then passed to the Word component
  showEn = () =>
    !this.state.showEn === true
      ? this.setState({ showEn: true })
      : this.setState({ showEn: false });

  render() {
    return (
      <Fragment>
        <Header />
        <div style={styles.content}>
          <Word word={this.props.word} showEn={this.state.showEn} />
          <Control />
          <Overlay wordList={this.state.response} />
        </div>
        <Footer showEn={this.showEn} />
      </Fragment>
    );
  }
}

App.defaultProps = {
  word: {}
};

App.propTypes = {
  word: PropTypes.object.isRequired //eslint-disable-line
};

const mapStateToProps = state => ({ word: state.wordReducer.word });
const mapDispatchToProps = { changeWord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
