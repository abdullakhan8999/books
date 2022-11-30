const sequelize = require("sequelize");
const db = require("../model/index");
db.admin = db.connection.define("admins", {
  id: {
    type: sequelize.INTEGER,
    notNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  admin_name: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING,
  },
});

module.exports = db;
