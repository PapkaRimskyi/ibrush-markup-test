/* eslint-disable react/prop-types */
import React from 'react';

import '../../../../img/quotation.png';

export default function BlockQuote(props) {
  const { author, quoteText } = props;
  return (
    <blockquote className="blockquote">
      {quoteText}
      <cite>{author}</cite>
    </blockquote>
  );
}
