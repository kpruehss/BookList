export function selectBook(book) {
  // selectBook as an ActionCreator and needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}