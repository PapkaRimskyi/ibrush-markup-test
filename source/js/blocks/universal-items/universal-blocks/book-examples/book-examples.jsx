import React from 'react';

import articleIntroductionData from './mock/article-introduction-data';

import '../../../../../img/books.jpg';

export default function BookExamples() {
  const { shortArticleDescription, whenArticleCreated, imgPath, imgAltText } = articleIntroductionData;
  return (
    <section className="article-introduction">
      <h2 className="visually-hidden">Введение</h2>
      <p className="article-introduction__paragraph">{shortArticleDescription}</p>
      <figure className="article-introduction__book-image-container">
        <p className="article-introduction__data">{whenArticleCreated}</p>
        <img src={imgPath} alt={imgAltText} className="article-introduction__book-image" />
      </figure>
    </section>
  );
}
