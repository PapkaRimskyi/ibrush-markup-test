import React from 'react';

import blockquoteInfo from './mock/blockquote-info';

import '../../../../../img/quotation.png';

export default function BlockQuote() {
  const { text, author } = blockquoteInfo;
  return (
    <blockquote className="blockquote">
      {text}
      <cite>{author}</cite>
    </blockquote>
  );
}
