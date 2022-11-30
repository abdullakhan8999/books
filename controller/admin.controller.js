const db = require("./../model/index");

exports.get_All_admin = (req, res, next) => {
  res.write("This is Admin router.");
  res.end();
};