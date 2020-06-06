/* eslint-disable react/prop-types */
import React from 'react';

export default function Paragraph(props) {
  const { paragraphText } = props;
  return (
    <p className="article-paragraph">
      {paragraphText}
    </p>
  );
}
