import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@material-ui/core";

const styles = {
  word: {
    marginTop: 100,
    marginBottom: 20
  }
};

const Word = props => (
  <Card style={styles.word}>
    <CardContent>
      {props.showEn === false ? (
        <Typography variant="display2" align="center">
          {props.word.es}
        </Typography>
      ) : (
        <Fragment>
          <Typography variant="display2" align="center" gutterBottom>
            {props.word.es}
          </Typography>
          <Typography variant="headline" align="center">
            {props.word.en}
          </Typography>
        </Fragment>
      )}
    </CardContent>
  </Card>
);

Word.propTypes = {
  showEn: PropTypes.bool.isRequired,
  word: PropTypes.object.isRequired //eslint-disable-line
};

export default Word;
