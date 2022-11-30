const db = require("./../model/index");

const get_All_Users = async (req, res, next) => {
  try {
    const users = await db.users.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(`All Users details:\n${JSON.stringify(users, null, 2)}`);
    res.end();
  } catch (error) {
    next(error);
  }
};
const get_User = async (req, res, next) => {
  try {
    const id = req.params.id;
    const get_User = await db.users.findByPk(id);
    res.write(
      `User:${req.params.id} details\n${JSON.stringify(get_User, null, 2)}`
    );
    res.end();
  } catch (error) {
    next(error);
  }
};
const post_New_Users = async (req, res, next) => {
  try {
    const User_Body = req.body;
    await db.users.create(User_Body);
    res.write("New user added");
    res.end();
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const update_User = {
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    };
    await db.users.update(update_User, { where: { id: id } });
    const updated_User = await db.users.findByPk(id);
    res.write(`User data updated:\n${JSON.stringify(updated_User, null, 2)}`);
    res.end();
  } catch (error) {
    next();
  }
};

const delete_User = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.users.destroy({ where: { id: id } });
    res.status(201).write(`User id:${id} removed`);
    res.end();
  } catch (error) {
    next();
  }
};

module.exports = {
  get_All_Users,
  get_User,
  post_New_Users,
  putUser,
  delete_User,
};
