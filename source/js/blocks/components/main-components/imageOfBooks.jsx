import React from 'react';
import '../../../../img/books.jpg';

export default function ImageOfBooks() {
  return (
    <section className="book-examples">
      <h2 className="visually-hidden">Книги для обучения JavaScript</h2>
      <p className="book-examples__paragraph">Можно выделить три основных направления для прогресса JavaScript</p>
      <figure className="book-examples__book-image-container">
        <p className="book-examples__data">12 апреля</p>
        <img src="assets/img/books.jpg" alt="Примеры книг по JavaScript" className="book-examples__book-image" />
      </figure>
    </section>
  );
}
