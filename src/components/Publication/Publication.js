import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ publication: { title, text } }) => {
  return (
    <div>
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </div>
  );
};

Publication.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
