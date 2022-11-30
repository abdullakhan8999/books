const express = require("express");
const adminRouter = express.Router();
const adminController = require("./../controller/admin.controller");

adminRouter.get("/", adminController.get_All_admin);

module.exports = adminRouter;
