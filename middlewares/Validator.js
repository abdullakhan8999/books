const db = require("../model/index");

exports.userIdValidtor = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    const user = await db.users.findByPk(id);
    if (!user) {
      res.status(404).write(`User by id: ${id} dose not exist.`);
      res.end();
    }
  }
  next();
};
exports.bookIdValidtor = async (req, res, next) => {
  const title = req.params.title;
  if (title) {
    const book = await db.books.findOne({ where: { title: title } });
    if (!book) {
      res.status(404).write(`Book by title: ${title} dose not exist.`);
      res.end();
    }
  }
  next();
};
exports.adminIdValidtor = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    const admin = await db.admin.findByPk(id);
    if (!admin) {
      res.status(404).write(`Admin by id: ${id} dose not exist.`);
      res.end();
    }
  }
  next();
};

exports.user_Body_Validtor = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.user_name) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.email) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  next();
};
exports.book_Body_Validtor = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.title) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.author) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.publication) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.price) {
    res.status(400).json({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  next();
};

exports.user_Find_duplicate = async (req, res, next) => {
  // here use find one
  const user = await db.users.findOne({
    where: { user_name: req.body.user_name },
  });
  if (!user) {
    next();
  } else {
    res.json({
      message: "User already exits",
    });
    return;
  }
};
exports.book_Find_duplicate = async (req, res, next) => {
  const book = await db.books.findOne({
    where: { title: req.body.title },
  });
  if (!book) {
    next();
  } else {
    res.json({
      message: "book already exits",
    });
    return;
  }
};
