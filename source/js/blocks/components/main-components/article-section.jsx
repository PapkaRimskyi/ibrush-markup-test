/* eslint-disable react/prop-types */
import React from 'react';

export default function ArticleSection(props) {
  const { sectionTitle, className, children } = props;
  return (
    <section className={className}>
      <h2 className="article-section__section-name ">{sectionTitle}</h2>
      {children}
    </section>
  );
}
