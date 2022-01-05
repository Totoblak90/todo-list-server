var express = require("express");
var router = express.Router();
var todosController = require("../controllers/todosController");

/* GET TODO list. */
router.get("/:userid/:folderid", todosController.list);

/* CREATE TODO. */
router.post("/create/:userid/:folderid", todosController.create);

/* EDIT TODO. */
router.put("/edit/:todoid", todosController.edit);

/* DELETE TODO. */
router.delete("/delete/:todoid", todosController.delete);

module.exports = router;
