import React from 'react';

import paragraphTextData from './mock/paragraph-text-data';

export default function Paragraph() {
  return (
    <p className="article-paragraph">
      {paragraphTextData}
    </p>
  );
}
