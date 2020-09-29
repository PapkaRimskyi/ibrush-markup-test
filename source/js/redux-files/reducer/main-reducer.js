import { combineReducers } from 'redux';

import changeBookReducer from './change-book-reducer/change-book-reducer';

export default combineReducers(
  {
    bookName: changeBookReducer,
  },
);
