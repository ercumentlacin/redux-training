/* eslint-disable no-debugger */
import { ADD_BOOK, REMOVE_BOOK } from '../types/book';

const initialState = {
  book: [],
};

const bookReducer = (state = initialState, action) => {
  // seçilen kitapın silinmesi
  const removedBookList = state.book?.filter(
    (book) => book.id !== action.payload.id
  );

  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        book: [...state.book, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        book: removedBookList,
      };

    default:
      return state;
  }
};

export default bookReducer;
