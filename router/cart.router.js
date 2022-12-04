const order_controller = require("./../controller/cart.controller");
const api = "/ecomm/api/v1/carts";

const authJwt = require("../middlewares/authjwt");

module.exports = (app) => {
  app.post(api, [authJwt.verifyToken], order_controller.create_Cart);
};
