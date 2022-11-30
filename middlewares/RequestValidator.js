const { use } = require("../router");
const db = require("./../model/index");

const userIdValidtor = async (req, res, next) => {
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

const user_Body_Validtor = async (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.user_name) {
    res.status(400).send({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.email) {
    res.status(400).send({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).send({
      message: "Please enter valid information to proceed",
    });
    return;
  }
  console.log("done");
  next();
};

const find_Duplicate = async (req, res, next) => {
  const user = req.body.user_name;
  const find_User = db.users.findAll({ where: { user_name: user } });
  if (find_User) {
    res.write("User exits");
    return;
  }
  next();
};

const adminIdValidtor = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    const user = await db.admin.findByPk(id);
    if (!item) {
      res.status(404).write(`Admin by id: ${id} dose not exist.`);
      res.end();
    }
  }
  next();
};

const validator = {
  user_Body_Validtor,
  userIdValidtor,
  adminIdValidtor,
  find_Duplicate,
};

module.exports = validator;
