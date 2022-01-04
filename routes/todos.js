var express = require("express");
var router = express.Router();
var todosController = require("../controllers/todosController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Estoy en todos");
});

module.exports = router;
