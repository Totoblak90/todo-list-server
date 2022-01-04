const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name")
    .isLength({
      min: 3,
    })
    .withMessage("Folder name must be at least 3 characters length."),
];
