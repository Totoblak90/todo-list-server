var express = require("express");
var router = express.Router();
var usersController = require("../controllers/usersController");
var registerMiddleware = require("../middlewares/registrationValidate");

/* POST login */
router.post("/login", usersController.login);

/** POST register */
router.post("/register", registerMiddleware, usersController.register);

module.exports = router;
