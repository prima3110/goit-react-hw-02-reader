import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.module.css';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <div>
      <p className={styles.progress}>
        {currentPage}/{totalPages.length}
      </p>
    </div>
  );
};

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Progress;
