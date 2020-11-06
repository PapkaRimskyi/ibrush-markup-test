import CHOOSE_BOOK from '../../action-names/action-names';

export default function chooseBook(bookName) {
  return {
    type: CHOOSE_BOOK,
    bookName,
  };
}
