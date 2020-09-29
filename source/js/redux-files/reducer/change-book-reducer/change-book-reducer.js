import CHOOSE_BOOK from '../../action/type/choose-book';

export default function changeBookReducer(state = null, { type, bookName }) {
  switch (type) {
    case CHOOSE_BOOK:
      return bookName;
    default:
      return state;
  }
}
