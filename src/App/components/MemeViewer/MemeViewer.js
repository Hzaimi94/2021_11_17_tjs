import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  // data-testid pour le test
  
  <div className={styles.MemeViewer} data-testid="MemeViewer">
    MemeViewer Component
  </div>
);

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
