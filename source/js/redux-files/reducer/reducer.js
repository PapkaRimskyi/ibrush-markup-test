import CHOOSE_BOOK from '../action/type/choose-book';

export default function reducerApp(state = {}, action) {
  switch (action.type) {
    case CHOOSE_BOOK:
      return { ...state, bookName: action.bookName };
    default:
      return state;
  }
}
