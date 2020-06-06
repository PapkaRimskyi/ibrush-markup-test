/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';

export default class DropMenu extends React.Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/destructuring-assignment
    this.dropMenuHandler = this.props.dropMenuHandler;
  }

  componentDidMount() {
    document.querySelector('.drop-menu__list').addEventListener('click', this.dropMenuHandler);
  }

  componentWillUnmount() {
    document.querySelector('.drop-menu__list').removeEventListener('click', this.dropMenuHandler);
  }

  dropMenuItemMarkup(bookName) {
    return (
      <li className="drop-menu__item" aria-label="Пункт списка" key={bookName}>
        <button type="button" className="drop-menu__item-button">{bookName}</button>
      </li>
    );
  }

  render() {
    const { books } = this.props;
    return (
      <div className="drop-menu">
        <ul className="drop-menu__list">
          {books.map((book) => this.dropMenuItemMarkup(book))}
        </ul>
      </div>
    );
  }
}
