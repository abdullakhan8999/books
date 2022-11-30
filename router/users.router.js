const Controller = require("./../controller/users.controller");
const Validtor = require("../middlewares/Validator");
const api = "/ecomm/api/v1/users";
module.exports = function (App) {
  App.get(`${api}`, Controller.get_All_Users);

  App.get(`${api}/:id`, [Validtor.userIdValidtor], Controller.get_User);

  App.put(
    `${api}/:id`,
    [Validtor.user_Body_Validtor, Validtor.userIdValidtor],
    Controller.putUser
  );

  App.delete(`${api}/:id`, [Validtor.userIdValidtor], Controller.delete_User);

  App.post(
    `${api}/`,
    [Validtor.user_Body_Validtor, Validtor.user_Find_duplicate],
    Controller.post_User
  );
};
