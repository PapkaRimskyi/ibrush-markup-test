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
    this.setState((prevState) => ({ bookInputStatus: !prevState.bookInputStatus }));
  }

  dropMenuHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      const text = e.target.textContent;
      this.setState((prevState) => ({ book: text, bookInputStatus: !prevState.bookInputStatus }));
    }
  }

  radioOnChange(e) {
    if (e.target.type === 'radio') {
      const starNumber = e.target.value;
      this.setState(() => ({ starDefaultCheked: starNumber }));
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
                  <input type="text" className="estimate-article__input-for-info" placeholder="Имя" pattern="^[А-Яа-яЁё\s]+$" title="Введите свое имя" required />
                </div>
                <div className="estimate-article__input-container">
                  <input type="email" className="estimate-article__input-for-info" placeholder="E-mail" title="Ваш e-mail" required />
                </div>
                <div className="estimate-article__input-container estimate-article__input-container--arrow">
                  <input type="text" className="estimate-article__input-for-info estimate-article__input-for-info--choose-book" placeholder="Выберите книгу" title="Выберите книгу из списка" onClick={this.bookInputHandler} defaultValue={book || ''} required />
                  {bookInputStatus ? <DropMenu books={this.booksList} dropMenuHandler={this.dropMenuHandler} /> : null}
                </div>
                <div className="estimate-article__input-container">
                  <textarea className="estimate-article__input-for-info estimate-article__textarea" name="your-feedback" id="your-feedback" placeholder="Ваш отзыв" required />
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
