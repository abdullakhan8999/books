const express = require("express");
const Router = express.Router();
const Controller = require("./../controller/users.controller");
const Validtor = require("../middlewares/Validator");

Router.get("/", Controller.get_All_Users);

Router.get(
  "/:id",
  [Validtor.userIdValidtor],
  Controller.get_User
);

Router.put(
  "/:id",
  [Validtor.user_Body_Validtor, Validtor.userIdValidtor],
  Controller.putUser
);

Router.delete(
  "/:id",
  [Validtor.userIdValidtor],
  Controller.delete_User
);

Router.post(
  "/",
  [Validtor.user_Body_Validtor, Validtor.user_Find_duplicate],
  Controller.post_User
);

module.exports = Router;
