import CHOOSE_BOOK from '../type/choose-book';

export default function chooseBookAction(bookName) {
  return {
    type: CHOOSE_BOOK,
    bookName,
  };
}
