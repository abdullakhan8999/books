const sequelize = require("sequelize");
const db = require("./../model/index");

db.connection = new sequelize("books_db", "root", "Ammiabba@143", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
