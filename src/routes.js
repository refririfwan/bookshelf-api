const {
  createBookHandler,
  getAllBooksHandler,
  getBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  getQueryParametersHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: createBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getQueryParametersHandler,
  },
];

module.exports = routes;
