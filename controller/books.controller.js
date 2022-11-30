const db = require("./../model/index");

const get_All_books = async (req, res, next) => {
  try {
    const books = await db.books.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(`All books details:\n${JSON.stringify(books, null, 2)}`);
    res.end();
  } catch (error) {
    next(error);
  }
};

const get_Book = async (req, res, next) => {
  try {
    const title = req.params.title;
    const get_Books = await db.books.findAll({ where: { title: title } });
    res.write(
      `User:${req.params.title} details\n${JSON.stringify(get_Books, null, 2)}`
    );
    res.end();
  } catch (error) {
    next(error);
  }
};

const post_Book = async (req, res, next) => {
  try {
    let book = req.body;
    await db.books.create(book);
    res.status(201).send("New book added");
    res.end();
  } catch (err) {
    next(err);
  }
};

const put_Book = async (req, res, next) => {
  try {
    const title = req.params.title;
    const update_book = {
      title: req.body.title,
      author: req.body.author,
      publication: req.body.publication,
      price: req.body.price,
    };
    await db.books.update(update_book, { where: { title: title } });
    const updated_book = await db.books.findAll({ where: { title: title } });
    res.write(`book data updated:\n${JSON.stringify(updated_book, null, 2)}`);
    res.end();
  } catch (error) {
    next();
  }
};

const delete_Book = async (req, res, next) => {
  const book = req.params.title;
  await db.books.destroy({ where: { title: book } });
  res.write("message: Book deleted successfully");
  res.end();
  next();
};

module.exports = {
  get_All_books,
  get_Book,
  post_Book,
  put_Book,
  delete_Book,
};
