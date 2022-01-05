var express = require("express");
var router = express.Router();
var todosController = require("../controllers/todosController");
var todosMiddleware = require("../middlewares/todosValidate");

/* GET TODO list. */
router.get("/:userid/:folderid", todosController.list);

/* CREATE TODO. */
router.post(
  "/create/:userid/:folderid",
  todosMiddleware,
  todosController.create
);

/* EDIT TODO. */
router.put("/edit/:todoid", todosMiddleware, todosController.edit);

/* DELETE TODO. */
router.delete("/delete/:todoid", todosController.delete);

/* DELETE all TODOS from selected folder. */
router.delete("/bulk-delete/:folderid", todosController.bulkDelete);

module.exports = router;
