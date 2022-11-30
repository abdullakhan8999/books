const db = require("./index");
const sequelize = require("sequelize");
const db_Connection = require("../config/db.config");
db.books = db.connection.define(
  "books",
  {
    id: {
      type: sequelize.INTEGER,
      notNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: sequelize.STRING,
    },
    author: {
      type: sequelize.STRING,
    },
    publication: {
      type: sequelize.STRING,
    },
    price: {
      type: sequelize.BIGINT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = db;
