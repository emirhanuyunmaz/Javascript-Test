const express = require("express") 
const todoController = require("../controller/todoController")
const router = express.Router()

router.route("/addTodo").post(todoController.addTodo)
router.route("/updateTodo/:id").post(todoController.updateTodo)
router.route("/getTodo").get(todoController.getTodo)
router.route("/deleteTodo/:id").delete(todoController.deleteTodo)


module.exports = router