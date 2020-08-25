import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleBody({ children }) {
  return (
    <article className="article-body">
      {children}
    </article>
  );
}

ArticleBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
