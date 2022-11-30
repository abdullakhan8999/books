const get_All_admin = (req, res, next) => {
  res.write("This is Admin router.");
  res.end();
};

module.exports = {
  get_All_admin,
};
