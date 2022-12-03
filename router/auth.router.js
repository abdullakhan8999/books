const auth_Controller = require("./../controller/auth.controller");
const verify_SignUP = require("./../middlewares/VerifySignUp");
const api = "/ecomm/api/v1/auth";
module.exports = function (App) {
  App.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  App.post(
    `${api}/signup`,
    [
      verify_SignUP.find_Duplicate_UserName_Email,
      verify_SignUP.find_Roles_Existed,
    ],
    auth_Controller.SignUp
  );

  App.post(`${api}/signin`, auth_Controller.SignIn);
};
