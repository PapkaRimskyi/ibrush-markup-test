/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

export default function BooksListMenu({ books, dropMenuHandler }) {
  return (
    <div className="books-list-menu">
      <ul className="books-list-menu__list" onClick={dropMenuHandler}>
        {books.map((book) => (
          <li className="books-list-menu__item" aria-label="Пункт списка" key={book}>
            <button type="button" className="books-list-menu__item-button">{book}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

BooksListMenu.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropMenuHandler: PropTypes.func.isRequired,
};
