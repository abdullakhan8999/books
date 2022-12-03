const jwt = require("jsonwebtoken");
const auth_config = require("./../config/auth.config");
const db = require("./../model/index");
const User = db.users;

exports.verifyToken = async (req, res, next) => {
  const token = req.header["x-access-token"];
  if (!token) return res.status(403).json({ message: "No token provided!" });

  jwt.verify(token, auth_config.secret, (err, decoded) => {
    if (err) return res.status(201).json({ message: "Unauthorized" });

    req.userId = decoded.id;
    next();
  });
};

exports.isAdmin = async (req, res, next) => {
  await User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).json({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};
