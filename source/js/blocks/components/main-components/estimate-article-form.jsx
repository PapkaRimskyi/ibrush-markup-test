/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import DropMenu from '../custom/drop-menu';
import StarRaiting from '../custom/star-raiting';

import '../../../../img/arrow.png';
import '../../../../img/star-empty.png';
import '../../../../img/star.png';

export default class EstimateArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.booksList = ['JavaScript ниндзя', 'Pragmatic Guide to JavaScript', 'Pro JavaScript Techniques', 'Выразительный JavaScript'];

    this.starAssessment = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

    this.state = {
      book: null, bookInputStatus: false, starDefaultCheked: 4,
    };

    this.bookInputHandler = this.bookInputHandler.bind(this);
    this.dropMenuHandler = this.dropMenuHandler.bind(this);
    this.inputKeyListener = this.inputKeyListener.bind(this);
    this.radioOnChange = this.radioOnChange.bind(this);
  }

  componentDidMount() {
    document.querySelector('.estimate-article__input-for-info--choose-book').addEventListener('keypress', this.inputKeyListener);
  }

  componentWillUnmount() {
    document.querySelector('.estimate-article__input-for-info--choose-book').removeEventListener('keypress', this.inputKeyListener);
  }

  inputKeyListener(e) {
    if (e.code === 'Enter') {
      this.bookInputHandler(e);
    }
  }

  bookInputHandler(e) {
    e.preventDefault();
    this.dropMenuArrowRotate(e.target.parentNode.children);
    this.setState((prevState) => ({ bookInputStatus: !prevState.bookInputStatus }));
  }

  dropMenuHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      const text = e.target.textContent;
      this.dropMenuArrowRotate(e.target.closest('.estimate-article__input-container').children);
      this.setState((prevState) => ({ book: text, bookInputStatus: !prevState.bookInputStatus }));
    }
  }

  radioOnChange(e) {
    if (e.target.type === 'radio') {
      const starNumber = e.target.value;
      this.setState(() => ({ starDefaultCheked: starNumber }));
    }
  }

  dropMenuArrowRotate(target) {
    const { bookInputStatus } = this.state;
    if (bookInputStatus) {
      Array.from(target).find((item) => item.tagName === 'IMG').style.transform = 'rotate(180deg)';
    } else {
      Array.from(target).find((item) => item.tagName === 'IMG').style.transform = 'rotate(0deg)';
    }
  }

  render() {
    const { bookInputStatus, book, starDefaultCheked } = this.state;
    return (
      <section className="estimate-article">
        <h2 className="visually-hidden">Форма оценка статьи</h2>
        <div className="estimate-article__container">
          <form action="#" method="post" className="estimate-article__form">
            <div className="estimate-article__stars">
              <p className="estimate-article__article-stars">Оцените статью</p>
              <StarRaiting starDefaultCheked={starDefaultCheked} starAssessment={this.starAssessment} radioOnChange={this.radioOnChange} />
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
                  <input type="text" className="estimate-article__input-for-info estimate-article__input-for-info--choose-book" id="choose-book" placeholder="Выберите книгу" title="Выберите книгу из списка" readOnly onClick={this.bookInputHandler} defaultValue={book || ''} required />
                  <label htmlFor="choose-book" className="estimate-article__input-label estimate-article__input-label--choose-book">Выберите книгу</label>
                  <img className="estimate-article__drop-menu-arrow" src="assets/img/arrow.png" alt="" />
                  {bookInputStatus ? <DropMenu books={this.booksList} dropMenuHandler={this.dropMenuHandler} /> : null}
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
}
