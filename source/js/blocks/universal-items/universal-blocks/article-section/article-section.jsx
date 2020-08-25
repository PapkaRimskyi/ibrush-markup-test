import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleSection({ sectionTitle, className, children }) {
  return (
    <section className={className}>
      <h2 className="article-section__section-name ">{sectionTitle}</h2>
      {children}
    </section>
  );
}

ArticleSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
