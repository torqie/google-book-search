const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String,
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;