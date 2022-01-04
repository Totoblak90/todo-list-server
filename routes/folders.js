var express = require("express");
var router = express.Router();
var foldersController = require("../controllers/foldersController");
var foldersValidate = require("../middlewares/foldersValidate");

/* GET home page. */
router.get("/:userid", foldersController.list);

/** POST create folder */
router.post("/create", foldersValidate, foldersController.create);

/** PUT edit folder */
router.put("/edit/:id", foldersValidate, foldersController.edit);

/** DELETE folder */
router.delete("/delete/:id", foldersController.delete);

module.exports = router;
