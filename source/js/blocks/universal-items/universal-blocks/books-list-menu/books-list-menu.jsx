/* eslint-disable class-methods-use-this */
import React from 'react';

export default class BooksListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.dropMenuHandler = this.props.dropMenuHandler;
  }

  componentDidMount() {
    document.querySelector('.books-list-menu__list').addEventListener('click', this.dropMenuHandler);
  }

  componentWillUnmount() {
    document.querySelector('.books-list-menu__list').removeEventListener('click', this.dropMenuHandler);
  }

  dropMenuItemMarkup(bookName) {
    return (
      <li className="books-list-menu__item" aria-label="Пункт списка" key={bookName}>
        <button type="button" className="books-list-menu__item-button">{bookName}</button>
      </li>
    );
  }

  render() {
    const { books } = this.props;
    return (
      <div className="books-list-menu">
        <ul className="books-list-menu__list">
          {books.map((book) => this.dropMenuItemMarkup(book))}
        </ul>
      </div>
    );
  }
}
