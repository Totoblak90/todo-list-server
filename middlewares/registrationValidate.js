const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("email")
    .isEmail()
    .withMessage("Email format must be valid."),
  check("email")
    .custom(async function (value, { req }) {
      let user;
      try {
        user = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });

        if (user == null) {
          return true;
        } else if (user != null) {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage("The email provided is already registered"),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must have a minimum of 8 characters, including 1 lowercase, 1 uppercase, 1 number and 1 symbol"
    ),
  check("passwordRepeat")
    .custom(function (value, { req }) {
      if (value == req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage("Password don't match. Please try again"),
];
