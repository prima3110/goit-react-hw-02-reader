import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  publicationIndex,
  onNextClick,
  onPrevClick,
  totalPages,
}) => {
  return (
    <div>
      <section>
        <button
          className={styles.button}
          type="button"
          onClick={onPrevClick}
          disabled={publicationIndex === 0}
        >
          Назад
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={onNextClick}
          disabled={publicationIndex === totalPages.length - 1}
        >
          Вперед
        </button>
      </section>
    </div>
  );
};

Controls.propTypes = {
  publicationIndex: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  totalPages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Controls;
