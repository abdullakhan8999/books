const Controller = require("./../controller/admin.controller");
const Validator = require("../middlewares/Validator");
const api = "/ecomm/api/v1/admin";
module.exports = function (App) {
  App.get(`${api}/`, Controller.get_All_admin);

  App.get(`${api}/:id`, [Validator.adminIdValidator], Controller.get_Admin);

  App.post(
    `${api}/`,
    [Validator.admin_Body_Validator, Validator.admin_Find_duplicate],
    Controller.post_Admin
  );

  App.put(
    `${api}/:id`,
    [Validator.adminIdValidator, Validator.admin_Body_Validator],
    Controller.put_Admin
  );
};
