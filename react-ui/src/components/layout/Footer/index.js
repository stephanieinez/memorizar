import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Tabs, Tab } from "@material-ui/core";

const styles = {
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
};

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  // value 0 tab is for es only, and value 1 tab is both es & en
  handleChange = () => {
    const value = this.state.value === 0 ? 1 : 0;

    this.setState({ value }, () => {
      this.props.showEn();
    });
  };

  render() {
    return (
      <Paper style={styles.footer}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          centered
        >
          <Tab label="Solo Español" />
          <Tab label="Español/English" />
        </Tabs>
      </Paper>
    );
  }
}

Footer.propTypes = {
  showEn: PropTypes.func.isRequired
};

export default Footer;
