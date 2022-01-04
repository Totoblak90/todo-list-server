var express = require("express");
var router = express.Router();
var foldersController = require("../controllers/foldersController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Estoy en folders");
});

module.exports = router;
