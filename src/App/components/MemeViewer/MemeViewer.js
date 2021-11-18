import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.scss";

const MemeViewer = (props) => (
  // data-testid pour le test
  <svg className={styles.MemeViewer} data-testid="MemeViewer">
    <image href={props.image.url} x="0" y="0"></image>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
