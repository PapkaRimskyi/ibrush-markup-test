import React from 'react';

import '../../../../../img/quotation.png';

export default function BlockQuote({ author, quoteText }) {
  return (
    <blockquote className="blockquote">
      {quoteText}
      <cite>{author}</cite>
    </blockquote>
  );
}
