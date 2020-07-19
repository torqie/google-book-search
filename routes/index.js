const BookController = require("../controllers/book.controller");

module.exports = app => {
  app.get('/api/books', BookController.all);
  app.post('/api/books', BookController.create);
  app.delete('/api/books/:id', BookController.delete)
};