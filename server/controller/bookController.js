const Book = require("../models/booksModel");

exports.postBook = async (req, res) => {
  // Posting books
  const newBook = await Book.create(req.body);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: newBook,
  });
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({
    status: "success",
    data: books,
  });
};

exports.getOne = async (req, res) => {
  const getOneBook = Book.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: getOneBook,
  });
};

exports.deleteBook = async (req, res) => {
  const deleteBook = await Book.findByIdAndDelete(req.params.id);

    if (!deleteBook) return console.log('No document found with this ID', 404);

  res.status(204).json({
    status: "success",
  });
};
