import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ paragraphText }) {
  return (
    <p className="article-paragraph">
      {paragraphText}
    </p>
  );
}

Paragraph.propTypes = {
  paragraphText: PropTypes.string.isRequired,
};
