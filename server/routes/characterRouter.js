const express = require("express");
const characterRouter = express.Router();

const {
  getCharacter,
  postCharacter,
} = require("../controller/characterController");

characterRouter.post("/", postCharacter);
characterRouter.get("/", getCharacter);

module.exports = characterRouter;
