const express = require("express");
const BooksRouter = express.Router();
const BooksController = require("./../controller/books.controller");

BooksRouter.get("/", BooksController.get_All_books);
// BooksRouter.get("/:tile                                                  ", BooksController.books_By_name);

module.exports = BooksRouter;
