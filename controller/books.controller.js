const get_All_books = (req, res, next) => {
  res.write("This is Books router.");
  res.end();
};

module.exports = {
  get_All_books,
};
