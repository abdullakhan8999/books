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
db.users = require("./User.model")(sequelize, db_connection);
db.books = require("./Books.model")(sequelize, db_connection);

module.exports = db;
