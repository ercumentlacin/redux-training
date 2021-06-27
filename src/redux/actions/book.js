import { ADD_BOOK, REMOVE_BOOK } from '../types/book';

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const removeBook = (bookId) => {
  return {
    type: REMOVE_BOOK,
    payload: bookId,
  };
};
