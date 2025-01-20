var express = require('express');
const Router = express.Router();
const UserController = require("../controllers/user");
const {
  secret_phrase_3,

} = require("../middlewares/validations");
const authMiddleware = require("../middlewares/validations/auth");

Router.post("/secret_phrase_3",authMiddleware,secret_phrase_3,UserController.secret_phrase_3)
Router.get("/get_secret_phrase3",authMiddleware,UserController.get_secret_phrase3)

module.exports = Router;
