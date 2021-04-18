const { createBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: createBookHandler,
  },
];

module.exports = routes;
