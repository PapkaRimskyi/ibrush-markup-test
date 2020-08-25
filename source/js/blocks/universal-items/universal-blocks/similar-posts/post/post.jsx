import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Post({ postData, activeClass }) {
  return (
    <li className={classNames('similar-post__item', activeClass || null)}>
      <div className="similar-post__illustration">
        <picture>
          <source media="(min-width: 768px)" srcSet={postData.desktopSrc || postData.mobileSrc} />
          <img src={postData.mobileSrc || postData.desktopSrc} alt="Заглавная тема поста" />
        </picture>
      </div>
      <h3 className="similar-post__title-post">
        <a href={postData.postHref} className="similar-post__link-post">{postData.title}</a>
      </h3>
    </li>
  );
}

Post.propTypes = {
  postData: PropTypes.objectOf(PropTypes.string).isRequired,
  activeClass: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Post.defaultProps = {
  activeClass: null,
};
