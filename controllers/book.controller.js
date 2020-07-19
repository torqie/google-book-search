const Book = require("../models/book.model");

exports.all = async (req, res) => {
  const books = await Book.find();
  return res.json(books)
};

exports.create = async (req, res) => {
  await Book.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  }, (err, newBook) => {
    if (err) {
      res.json({
        success: false,
        message: "Unable to save the book, try again later."
      })
    } else {
      res.json({
        success: true,
        message: "Successfully saved the book",
        data: newBook
      });
    }
  });
};

exports.delete = async (req, res) => {
  Book.deleteOne({ _id: req.params.id }, err => {
    if(err) {
      console.log("Could not delete book... :", err);
      res.json({
        success: false,
        message: "Could not delete book : " + err
      });
    } else {
      res.json({
        success: true,
        message: "Book has been deleted."
      });
    }
  });
};