// npm run dev
const express = require("express");
const router = express.Router();
const UsersRouter = require("./users.router");
const BooksRouter = require("./books.router");
const adminRouter = require("./adminRouter");

router.get("/", (req, res, next) => {
  res.write("This is base router.");
  res.end();
});

router.use("/ecomm/api/v1/users", UsersRouter);
router.use("/ecomm/api/v1/books", BooksRouter);
router.use("/ecomm/api/v1/admin", adminRouter);
module.exports = router;
