const express = require("express");
const UsersRouter = express.Router();
const UsersController = require("./../controller/users.controller");
const userValidtor = require("./../middlewares/RequestValidator");

UsersRouter.get("/", UsersController.get_All_Users);
UsersRouter.get(
  "/:id",
  [userValidtor.userIdValidtor],
  UsersController.get_User
);
UsersRouter.post(
  "/",
  [userValidtor.user_Body_Validtor, userValidtor.find_Duplicate],
  UsersController.post_New_Users
);
UsersRouter.put(
  "/:id",
  [userValidtor.user_Body_Validtor, userValidtor.userIdValidtor],
  UsersController.putUser
);
// UsersRouter.put(
//   "/:user_name",
//   [userValidtor.user_Body_Validtor, userValidtor.userIdValidtor],
//   UsersController.put_user_name
// );

UsersRouter.delete("/:id",[userValidtor.userIdValidtor],UsersController.delete_User);

module.exports = UsersRouter;
