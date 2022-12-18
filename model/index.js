const config = require("../config/db.config");
const sequelize = require("sequelize");
const db_connection = new sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: config.operatorsAliases,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.connection = db_connection;
db.sequelize = sequelize;
db.admin = require("./Admin.model")(sequelize, db_connection);
db.todo = require("./todo.model")(sequelize, db_connection);
db.users = require("./User.model")(sequelize, db_connection);
db.role = require("./Role.model")(sequelize, db_connection);

db.role.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.users.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin"];

module.exports = db;
