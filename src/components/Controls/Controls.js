import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  firstPublication,
  lastPublication,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <div>
      <section>
        <button
          className={styles.button}
          type="button"
          onClick={onPrevClick}
          disabled={firstPublication}
        >
          Назад
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={onNextClick}
          disabled={lastPublication}
        >
          Вперед
        </button>
      </section>
    </div>
  );
};

Controls.propTypes = {
  firstPublication: PropTypes.bool.isRequired,
  lastPublication: PropTypes.bool.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Controls;
