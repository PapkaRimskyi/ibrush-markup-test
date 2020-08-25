import React from 'react';
import PropTypes from 'prop-types';

import '../../../../../img/quotation.png';

export default function BlockQuote({ author, quoteText }) {
  return (
    <blockquote className="blockquote">
      {quoteText}
      <cite>{author}</cite>
    </blockquote>
  );
}

BlockQuote.propTypes = {
  author: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
};
