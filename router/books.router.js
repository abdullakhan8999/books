const Controller = require("./../controller/books.controller");
const Validator = require("../middlewares/Validator");
const api = "/ecomm/api/v1/books";
module.exports = function (App) {
  App.get(`${api}`, Controller.get_All_books);

  App.get(`${api}/:title`, [Validator.bookIdValidator], Controller.get_Book);

  App.post(
    `${api}/`,
    [Validator.book_Body_Validator, Validator.book_Find_duplicate],
    Controller.post_Book
  );

  App.put(`${api}/:title`, [Validator.bookIdValidator], Controller.put_Book);

  App.delete(
    `${api}/:title`,
    [Validator.bookIdValidator],
    Controller.delete_Book
  );
};
