const adminController = require("./../controller/admin.controller");
const Validator = require("../middlewares/Validator");
const api = "/ecomm/api/v1/admin/";
module.exports = function (App) {
  App.get(`${api}`, adminController.get_All_admin);
};
