import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.module.css';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <div>
      <p className={styles.progress}>
        {currentPage}/{totalPages}
      </p>
    </div>
  );
};

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
