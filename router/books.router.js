const express = require("express");
const Router = express.Router();
const Controller = require("./../controller/books.controller");
const Validator = require("../middlewares/Validator");

Router.get("/", Controller.get_All_books);

Router.get("/:title", [Validator.bookIdValidtor], Controller.get_Book);
Router.post(
  "/",
  [Validator.book_Body_Validtor, Validator.book_Find_duplicate],
  Controller.post_Book
);
Router.put("/:title", [Validator.bookIdValidtor], Controller.put_Book);
Router.delete("/:title", [Validator.bookIdValidtor], Controller.delete_Book);
module.exports = Router;
