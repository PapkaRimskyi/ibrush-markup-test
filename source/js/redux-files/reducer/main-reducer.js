import { combineReducers } from 'redux';

import changeBook from './change-book/change-book';

export default combineReducers(
  {
    bookName: changeBook,
  },
);
