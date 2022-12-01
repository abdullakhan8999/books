const Controller = require("./../controller/admin.controller");
const Validator = require("../middlewares/Validator");
const api = "/ecomm/api/v1/admin";
module.exports = function (App) {
  App.get(`${api}/`, Controller.get_All_admin);

  App.get(`${api}/:id`, [Validator.adminIdValidtor], Controller.get_Admin);
};
