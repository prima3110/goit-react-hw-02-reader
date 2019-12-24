import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ publication: { title, text }, currentPage }) => {
  return (
    <div>
      <article>
        <h2>
          {currentPage}. {title}
        </h2>
        <p>{text}</p>
      </article>
    </div>
  );
};

Publication.propTypes = {
  currentPage: PropTypes.number.isRequired,
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
