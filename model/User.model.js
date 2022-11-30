const db = require("./index");
const sequelize = require("sequelize");
db.users = db.connection.define(
  "users",
  {
    id: {
      type: sequelize.INTEGER,
      notNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = db;
