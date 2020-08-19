import React from 'react';

export default function ArticleSection({ sectionTitle, className, children }) {
  return (
    <section className={className}>
      <h2 className="article-section__section-name ">{sectionTitle}</h2>
      {children}
    </section>
  );
}
