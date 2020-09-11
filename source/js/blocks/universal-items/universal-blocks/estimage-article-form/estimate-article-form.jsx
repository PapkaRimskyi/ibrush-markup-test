/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import BooksListMenu from '../books-list-menu/books-list-menu';
import StarRaiting from '../star-raiting/star-raiting';

import booksList from './model/books-list';

import '../../../../../img/arrow.png';
import '../../../../../img/star-empty.png';
import '../../../../../img/star.png';

export default function EstimateArticleForm({ bookName, setBook }) {
  const [bookInputStatus, setBookInputStatus] = useState(false);
  const starAssessment = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

  function bookInputHandler(e) {
    e.preventDefault();
    dropMenuArrowRotate(e.target.parentNode.children);
    setBookInputStatus((prevBookInputStatus) => !prevBookInputStatus);
  }

  function inputKeyListener(e) {
    if (e.key === 'Enter') {
      bookInputHandler(e);
    }
  }

  function dropMenuHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      const text = e.target.textContent;
      dropMenuArrowRotate(e.target.closest('.estimate-article__input-container').children);
      setBookInputStatus((prevBookInputStatus) => !prevBookInputStatus);
      setBook(text);
    }
  }

  function dropMenuArrowRotate(target) {
    Array.from(target).find((item) => item.tagName === 'IMG').style.transform = `rotate(${bookInputStatus ? '180deg' : '0deg'})`;
  }

  return (
    <section className="estimate-article">
      <h2 className="visually-hidden">Форма оценка статьи</h2>
      <div className="estimate-article__container">
        <form action="#" method="post" className="estimate-article__form">
          <div className="estimate-article__stars">
            <p className="estimate-article__article-stars">Оцените статью</p>
            <StarRaiting starAssessment={starAssessment} />
          </div>
          <div className="estimate-article__comments-block">
            <p className="estimate-article__leave-comment">Добавить комментарий к книге</p>
            <section className="estimate-article__info-block">
              <h2 className="visually-hidden">Оставить комментарий к книге</h2>
              <div className="estimate-article__input-container">
                <input type="text" className="estimate-article__input-for-info" id="name" placeholder="Имя" pattern="^[А-Яа-яЁё\s]+$" title="Введите свое имя" required />
                <label htmlFor="name" className="estimate-article__input-label">Имя</label>
              </div>
              <div className="estimate-article__input-container">
                <input type="email" className="estimate-article__input-for-info" id="email" placeholder="E-mail" title="Ваш e-mail" required />
                <label htmlFor="email" className="estimate-article__input-label">E-mail</label>
              </div>
              <div className="estimate-article__input-container">
                <input
                  type="text"
                  className="estimate-article__input-for-info estimate-article__input-for-info--choose-book"
                  id="choose-book"
                  placeholder="Выберите книгу"
                  title="Выберите книгу из списка"
                  readOnly
                  onKeyPress={inputKeyListener}
                  onClick={bookInputHandler}
                  defaultValue={bookName || null}
                  required
                />
                <label htmlFor="choose-book" className="estimate-article__input-label estimate-article__input-label--choose-book">Выберите книгу</label>
                <img className="estimate-article__drop-menu-arrow" src="assets/img/arrow.png" alt="" />
                <CSSTransition in={bookInputStatus} timeout={400} classNames="animate" unmountOnExit>
                  <BooksListMenu books={booksList} dropMenuHandler={dropMenuHandler} />
                </CSSTransition>
              </div>
              <div className="estimate-article__input-container">
                <textarea className="estimate-article__input-for-info estimate-article__textarea" name="your-feedback" id="your-feedback" placeholder="Ваш отзыв" required />
                <label htmlFor="your-feedback" className="estimate-article__input-label">Ваш отзыв</label>
              </div>
            </section>
          </div>
          <button type="submit" className="estimate-article__submit-button">Отправить</button>
        </form>
      </div>
    </section>
  );
}

EstimateArticleForm.propTypes = {
  bookName: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setBook: PropTypes.func.isRequired,
};

EstimateArticleForm.defaultProps = {
  bookName: null,
};
