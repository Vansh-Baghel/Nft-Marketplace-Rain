const Book = require('../models/booksModel')

exports.postBook = async (req , res) => {
  // Posting books
  const newBook = await Book.create(req.body);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: newBook
  })
}

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({
    status: "success",
    data: books
  })
}

exports.deleteBook = async (req, res) => {
  
}