import CHOOSE_BOOK from '../../action-names/action-names';

export default function changeBook(state = null, { type, bookName }) {
  switch (type) {
    case CHOOSE_BOOK:
      return bookName;
    default:
      return state;
  }
}
