const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const {postBook, getBooks , getOne , deleteBook} = require('./controller/bookController');

const port = 5000;

app.listen(port, () => {
  console.log(`App running from port ${port}`);
});

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

app.use('/api/v1/postBook' , jsonParser , postBook)
app.use('/api/v1/getBooks' , getBooks)
app.use('/api/v1/getOneBook/:id' , getOne)
app.use('/api/v1/deleteBook/:id' , deleteBook)