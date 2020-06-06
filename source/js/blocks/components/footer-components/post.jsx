/* eslint-disable react/prop-types */
import React from 'react';

export default function Post(props) {
  const { postData, activeClass } = props;
  const defaultClass = 'similar-post__item';
  return (
    <li className={`${defaultClass} ${activeClass || ''}`}>
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
